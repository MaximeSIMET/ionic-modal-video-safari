import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    this.modalCtrl.create({
      component: ModalComponent,
      backdropDismiss: true
    }).then(r => r.present());
  }

}
