import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<div #videoWrapper ></div>`,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @ViewChild('videoWrapper', { static: true }) videoWrapper: ElementRef;

  constructor() { }

  ngOnInit() {
    const playerHTML = `
       <video
    controls
    preload="auto"
    width="640"
    height="264"
  >
    <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
  </video>`;
    this.videoWrapper.nativeElement.innerHTML = playerHTML;
  }
}
