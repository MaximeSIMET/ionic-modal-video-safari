import { Component, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController, private renderer: Renderer2) {
    // This listener is specfic to safari browsers and triggers when entering and exiting fullscreen
    // Using this event to adjust the css of any open modals except
    renderer.listen('document', 'webkitfullscreenchange', (e) => {
      const video = e.target as HTMLVideoElement;
      const dom = video?.ownerDocument;
      const isCurrentlyFullscreen = video['webkitDisplayingFullscreen'];
      if(video !== undefined && dom !== undefined) {
        // Get the top-most modal
        this.modalCtrl.getTop().then(modal => {
          //Create an array of modals that are NOT the top
          const modals = Array.from(dom.getElementsByTagName('ion-modal')).filter(x => x !== modal);
          //Loop through the modals and add/remove the css class (from global.scss) that forces 'z-index: auto'
          modals.forEach(m => {
            if(isCurrentlyFullscreen) {
              m.classList.add('z-auto');
            } else {
              m.classList.remove('z-auto');
            }
          });
        });  
      }  
  });
}
}
