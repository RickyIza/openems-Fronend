import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared/shared.module';
import { ChpSocComponent } from './chpsoc/chpsoc.component';
import { ChpsocModalComponent } from './chpsoc/modal/modal.component';
import { AutarchyComponent } from './common/autarchy/autarchy.component';
import { AutarchyModalComponent } from './common/autarchy/modal/modal.component';
import { ConsumptionComponent } from './common/consumption/consumption.component';
import { ConsumptionModalComponent } from './common/consumption/modal/modal.component';
import { GridComponent } from './common/grid/grid.component';
import { GridModalComponent } from './common/grid/modal/modal.component';
import { SelfconsumptionModalComponent } from './common/selfconsumption/modal/modal.component';
import { SelfConsumptionComponent } from './common/selfconsumption/selfconsumption.component';
import { StorageModalComponent } from './common/storage/modal/modal.component';
import { StorageComponent } from './common/storage/storage.component';
import { Controller_ChannelthresholdComponent } from './Controller/Channelthreshold/Channelthreshold';
import { Controller_Ess_FixActivePower } from './Controller/Ess_FixActivePower/Ess_FixActivePower';
import { Controller_Ess_FixActivePowerModalComponent } from './Controller/Ess_FixActivePower/modal/modal.component';
import { Controller_EvcsComponent } from './Controller/Evcs/Evcs';
import { AdministrationComponent } from './Controller/Evcs/modal/administration/administration.component';
import { Controller_EvcsModalComponent } from './Controller/Evcs/modal/modal.page';
import { Controller_EvcsPopoverComponent } from './Controller/Evcs/modal/popover/popover.page';
import { Controller_Io_FixDigitalOutput } from './Controller/Io_FixDigitalOutput/Io_FixDigitalOutput';
import { Controller_Io_FixDigitalOutputModalComponent } from './Controller/Io_FixDigitalOutput/modal/modal.component';
import { Controller_Io_HeatingElementComponent } from './Controller/Io_HeatingElement/Io_HeatingElement';
import { Controller_Io_HeatingElementModalComponent } from './Controller/Io_HeatingElement/modal/modal.component';
import { DelayedSellToGridComponent } from './delayedselltogrid/delayedselltogrid.component';
import { DelayedSellToGridModalComponent } from './delayedselltogrid/modal/modal.component';
import { EnergymonitorModule } from './energymonitor/energymonitor.module';
import { EvcsClusterComponent } from './evcsCluster/evcsCluster.component';
import { EvcsChart } from './evcsCluster/modal/evcs-chart/evcs.chart';
import { ModalComponentEvcsCluster } from './evcsCluster/modal/evcsCluster-modal.page';
import { FlatWidgetHorizontalLine } from './flat/flat-widget-line/flat-widget-horizontal-line';
import { FlatWidgetLine } from './flat/flat-widget-line/flat-widget-line';
import { FlatWidgetPercentagebar } from './flat/flat-widget-line/flat-widget-percentagebar';
import { FlatWidgetComponent } from './flat/flat-widget.component';
import { GridOptimizedChargeComponent } from './gridoptimizedcharge/gridoptimizedcharge.component';
import { GridOptimizedChargeModalComponent } from './gridoptimizedcharge/modal/modal.component';
import { PredictionChartComponent } from './gridoptimizedcharge/modal/predictionChart';
import { HeatPumpComponent } from './heatpump/heatpump.component';
import { HeatPumpModalComponent } from './heatpump/modal/modal.component';
import { InfoComponent } from './info/info.component';
import { Io_Api_DigitalInputComponent } from './Io/Api_DigitalInput/Io_Api_DigitalInput';
import { Io_Api_DigitalInput_ModalComponent } from './Io/Api_DigitalInput/modal/modal.component';
import { LiveComponent } from './live.component';
import { OfflineComponent } from './offline/offline.component';
import { AsymmetricPeakshavingComponent } from './peakshaving/asymmetric/asymmetricpeakshaving.component';
import { AsymmetricPeakshavingModalComponent } from './peakshaving/asymmetric/modal/modal.component';
import { SymmetricPeakshavingModalComponent } from './peakshaving/symmetric/modal/modal.component';
import { SymmetricPeakshavingComponent } from './peakshaving/symmetric/symmetricpeakshaving.component';
import { TimeslotPeakshavingModalComponent } from './peakshaving/timeslot/modal/modal.component';
import { TimeslotPeakshavingComponent } from './peakshaving/timeslot/timeslotpeakshaving.component';
import { ProductionModalComponent } from './production/modal/modal.component';
import { ProductionComponent } from './production/production.component';
import { SinglethresholdModalComponent } from './singlethreshold/modal/modal.component';
import { SinglethresholdComponent } from './singlethreshold/singlethreshold.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EnergymonitorModule,
    SharedModule,
  ],
  entryComponents: [
    AdministrationComponent,
    AsymmetricPeakshavingModalComponent,
    AutarchyModalComponent,
    ChpsocModalComponent,
    ConsumptionModalComponent,
    Controller_Ess_FixActivePower,
    Controller_Ess_FixActivePowerModalComponent,
    Controller_Io_FixDigitalOutput,
    Controller_Io_FixDigitalOutputModalComponent,
    Controller_Io_HeatingElementModalComponent,
    DelayedSellToGridModalComponent,
    Io_Api_DigitalInputComponent,
    Io_Api_DigitalInput_ModalComponent,
    Controller_EvcsModalComponent,
    Controller_EvcsPopoverComponent,
    FlatWidgetComponent,
    FlatWidgetHorizontalLine,
    FlatWidgetLine,
    FlatWidgetPercentagebar,
    GridModalComponent,
    GridOptimizedChargeModalComponent,
    HeatPumpModalComponent,
    ModalComponentEvcsCluster,
    ProductionModalComponent,
    SelfconsumptionModalComponent,
    SinglethresholdModalComponent,
    StorageModalComponent,
    SymmetricPeakshavingModalComponent,
    TimeslotPeakshavingModalComponent,
  ],
  declarations: [
    AdministrationComponent,
    AsymmetricPeakshavingComponent,
    AsymmetricPeakshavingModalComponent,
    AutarchyComponent,
    AutarchyModalComponent,
    Controller_ChannelthresholdComponent,
    ChpSocComponent,
    ChpsocModalComponent,
    ConsumptionComponent,
    ConsumptionModalComponent,
    Controller_Ess_FixActivePower,
    Controller_Ess_FixActivePowerModalComponent,
    Controller_Io_FixDigitalOutput,
    Controller_Io_FixDigitalOutputModalComponent,
    Controller_Io_HeatingElementComponent,
    Controller_Io_HeatingElementModalComponent,
    DelayedSellToGridComponent,
    DelayedSellToGridModalComponent,
    Io_Api_DigitalInputComponent,
    Io_Api_DigitalInput_ModalComponent,
    EvcsChart,
    EvcsClusterComponent,
    Controller_EvcsComponent,
    Controller_EvcsModalComponent,
    Controller_EvcsPopoverComponent,
    FlatWidgetComponent,
    FlatWidgetHorizontalLine,
    FlatWidgetLine,
    FlatWidgetPercentagebar,
    GridComponent,
    GridModalComponent,
    GridOptimizedChargeComponent,
    GridOptimizedChargeModalComponent,
    HeatPumpComponent,
    HeatPumpModalComponent,
    InfoComponent,
    LiveComponent,
    ModalComponentEvcsCluster,
    OfflineComponent,
    PredictionChartComponent,
    ProductionComponent,
    ProductionModalComponent,
    SelfConsumptionComponent,
    SelfconsumptionModalComponent,
    SinglethresholdComponent,
    SinglethresholdModalComponent,
    StorageComponent,
    StorageModalComponent,
    SymmetricPeakshavingComponent,
    SymmetricPeakshavingModalComponent,
    TimeslotPeakshavingComponent,
    TimeslotPeakshavingModalComponent,
  ]
})
export class LiveModule { }
