import { AbstractHistoryChart } from '../abstracthistorychart';
import { ActivatedRoute } from '@angular/router';
import { ChannelAddress, Edge, EdgeConfig, Service, Utils } from '../../../shared/shared';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Data, TooltipItem } from '../shared';
import { DefaultTypes } from 'src/app/shared/service/defaulttypes';
import { formatNumber } from '@angular/common';
import { QueryHistoricTimeseriesDataResponse } from 'src/app/shared/jsonrpc/response/queryHistoricTimeseriesDataResponse';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'consumptionOtherChart',
    templateUrl: '../abstracthistorychart.html'
})
export class ConsumptionOtherChartComponent extends AbstractHistoryChart implements OnInit, OnChanges {

    @Input() public period: DefaultTypes.HistoryPeriod;

    ngOnChanges() {
        this.updateChart();
    };

    constructor(
        protected service: Service,
        protected translate: TranslateService,
        private route: ActivatedRoute,
    ) {
        super(service, translate);
    }


    ngOnInit() {
        this.spinnerId = "consumption-other-chart";
        this.service.startSpinner(this.spinnerId);
        this.service.setCurrentComponent('', this.route);
    }

    ngOnDestroy() {
        this.unsubscribeChartRefresh()
    }

    protected updateChart() {
        this.autoSubscribeChartRefresh();
        this.service.startSpinner(this.spinnerId);
        this.loading = true;
        this.queryHistoricTimeseriesData(this.period.from, this.period.to).then(response => {
            this.service.getConfig().then(config => {
                this.colors = [];
                let result = (response as QueryHistoricTimeseriesDataResponse).result;

                // convert labels
                let labels: Date[] = [];
                for (let timestamp of result.timestamps) {
                    labels.push(new Date(timestamp));
                }
                this.labels = labels;

                // convert datasets
                let datasets = [];

                // gather EVCS consumption
                let totalEvcsConsumption: number[] = [];
                config.getComponentsImplementingNature("io.openems.edge.evcs.api.Evcs").filter(component => !(component.factoryId == 'Evcs.Cluster' || component.factoryId == 'Evcs.Cluster.PeakShaving' || component.factoryId == 'Evcs.Cluster.SelfConsumption')).forEach(component => {
                    totalEvcsConsumption = result.data[component.id + '/ChargePower'].map((value, index) => {
                        return Utils.addSafely(totalEvcsConsumption[index], value / 1000)
                    });
                })

                // gather other Consumption (Total - EVCS)
                let otherConsumption: number[] = [];
                if (totalEvcsConsumption != []) {
                    otherConsumption = result.data['_sum/ConsumptionActivePower'].map((value, index) => {
                        if (value != null && totalEvcsConsumption[index] != null) {
                            return Utils.subtractSafely(value / 1000, totalEvcsConsumption[index]);
                        }
                    })
                }

                // show other consumption
                if (totalEvcsConsumption != []) {
                    datasets.push({
                        label: this.translate.instant('General.consumption'),
                        data: otherConsumption,
                        hidden: false
                    });
                    this.colors.push({
                        backgroundColor: 'rgba(253,197,7,0.05)',
                        borderColor: 'rgba(253,197,7,1)',
                    })

                }
                this.datasets = datasets;
                this.loading = false;
                this.service.stopSpinner(this.spinnerId);
            }).catch(reason => {
                console.error(reason); // TODO error message
                this.initializeChart();
                return;
            });
        }).catch(reason => {
            console.error(reason); // TODO error message
            this.initializeChart();
            return;
        });
    }

    protected getChannelAddresses(edge: Edge, config: EdgeConfig): Promise<ChannelAddress[]> {
        return new Promise((resolve) => {
            let result: ChannelAddress[] = [
                new ChannelAddress('_sum', 'ConsumptionActivePower'),
            ];
            config.getComponentsImplementingNature("io.openems.edge.evcs.api.Evcs").filter(component => !(component.factoryId == 'Evcs.Cluster')).forEach(component => {
                result.push(new ChannelAddress(component.id, 'ChargePower'));
            })
            resolve(result);
        })
    }

    protected setLabel() {
        let options = this.createDefaultChartOptions();
        options.scales.yAxes[0].scaleLabel.labelString = "kW";
        options.tooltips.callbacks.label = function (tooltipItem: TooltipItem, data: Data) {
            let label = data.datasets[tooltipItem.datasetIndex].label;
            let value = tooltipItem.yLabel;
            return label + ": " + formatNumber(value, 'de', '1.0-2') + " kW";
        }
        this.options = options;
    }

    public getChartHeight(): number {
        return window.innerHeight / 21 * 9;
    }
}