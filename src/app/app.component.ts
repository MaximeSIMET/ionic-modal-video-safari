import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) {
    // This listener is specfic to safari browsers and triggers when entering and exiting fullscreen
    // Using this event to adjust the css of any open modals except
    document.addEventListener('webkitfullscreenchange', async (e) => {
      // boolean that defines the current fullscreen state
      const isCurrentlyFullscreen = document['webkitIsFullScreen'];

      // Get the top-most modal
      const topModal = await this.modalCtrl.getTop();

      //Create an array of modals that are NOT the top
      const modals = Array.from(document.getElementsByTagName('ion-modal')).filter(x => x !== topModal);

      //Loop through the modals and add/remove the css class (from global.scss) that forces 'z-index: auto'
      modals.forEach(modal => {
          if(isCurrentlyFullscreen) {
            modal.classList.add('z-auto');
          } else {
            modal.classList.remove('z-auto');
          }
        });
    });
  }
}
