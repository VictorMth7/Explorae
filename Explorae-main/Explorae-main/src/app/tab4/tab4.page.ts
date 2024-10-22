import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 10,
    freeMode: true
  };

  constructor() {}

}
