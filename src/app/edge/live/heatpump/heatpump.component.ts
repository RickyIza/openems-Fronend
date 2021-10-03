import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChannelAddress, Edge, EdgeConfig, Service, Websocket } from '../../../shared/shared';
import { Component, Input } from '@angular/core';
import { HeatPumpModalComponent } from './modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: HeatPumpComponent.SELECTOR,
  templateUrl: './heatpump.component.html'
})
export class HeatPumpComponent {

  private static readonly SELECTOR = "heatpump";

  @Input() public componentId: string;

  private edge: Edge = null;
  public component: EdgeConfig.Component = null;
  public status: BehaviorSubject<{ name: string }> = new BehaviorSubject(null);

  constructor(
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    private websocket: Websocket,
    public service: Service,

  ) { }

  ngOnInit() {
    this.service.setCurrentComponent('', this.route).then(edge => {
      this.edge = edge;
      this.service.getConfig().then(config => {
        this.component = config.components[this.componentId];
        let channels = [
          new ChannelAddress(this.component.id, 'Status'),
          new ChannelAddress(this.component.id, 'State'),
        ]
        this.edge.subscribeChannels(this.websocket, HeatPumpComponent.SELECTOR, channels);
      })
    })

  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: HeatPumpModalComponent,
      componentProps: {
        edge: this.edge,
        component: this.component,
        status: this.status
      }
    });
    modal.onDidDismiss().then(() => {
      this.service.getConfig().then(config => {
        this.component = config.components[this.componentId];
      })
    })
    return await modal.present();
  }

  ngOnDestroy() {
    this.edge.unsubscribeChannels(this.websocket, HeatPumpComponent.SELECTOR);
  }
}
