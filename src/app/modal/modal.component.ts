import {Component, ElementRef, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalTwoComponent} from "../modaltwo/modaltwo.component";

@Component({
  selector: 'app-modal',
  template: `<ion-button (click)="openModalTwo()">Open second modal</ion-button>`,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @ViewChild('videoWrapper', { static: true }) videoWrapper: ElementRef;

  constructor(private modalCtrl: ModalController) { }

  openModalTwo() {
    this.modalCtrl.create({
      component: ModalTwoComponent,
      backdropDismiss: true,
      cssClass: 'allow-fullscreen'
    }).then(r => r.present());
  }
}
