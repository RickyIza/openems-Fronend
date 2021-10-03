import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Edge, Service, Websocket, EdgeConfig, ChannelAddress } from '../../../../shared/shared';
import { ModalController } from '@ionic/angular';
import { SymmetricPeakshavingModalComponent } from './modal/modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: SymmetricPeakshavingComponent.SELECTOR,
    templateUrl: './symmetricpeakshaving.component.html'
})
export class SymmetricPeakshavingComponent {

    private static readonly SELECTOR = "symmetricpeakshaving";

    @Input() public componentId: string;

    public edge: Edge = null;

    public component: EdgeConfig.Component = null;

    constructor(
        private route: ActivatedRoute,
        private websocket: Websocket,
        protected translate: TranslateService,
        public modalCtrl: ModalController,
        public service: Service,
    ) { }

    ngOnInit() {
        this.service.setCurrentComponent('', this.route).then(edge => {
            this.edge = edge;
            this.service.getConfig().then(config => {
                this.component = config.getComponent(this.componentId);
                this.edge.subscribeChannels(this.websocket, SymmetricPeakshavingComponent.SELECTOR, [
                    new ChannelAddress(this.component.properties['meter.id'], 'ActivePower')
                ])
            });
        });
    }

    ngOnDestroy() {
        this.edge.unsubscribeChannels(this.websocket, SymmetricPeakshavingComponent.SELECTOR);
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: SymmetricPeakshavingModalComponent,
            componentProps: {
                component: this.component,
                edge: this.edge
            }
        });
        return await modal.present();
    }
}