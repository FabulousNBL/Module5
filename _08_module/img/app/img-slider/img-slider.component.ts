import {Component, OnInit, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, Input} from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';
import {ListImage} from "../list-image";

@Component({
  selector: 'ngapp-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit {

  listImg: ListImage;

  component;

  currentImg;
  activeIndex = 0;

  constructor() {
    this.listImg = new ListImage;
  }

  ngOnInit() {
    this.component = this.listImg.listImage;
    this.currentImg = this.component[this.activeIndex];
  }


  previous() {
    if (this.activeIndex > 0)
    {  this.activeIndex--;
    }
    this.currentImg = this.component[this.activeIndex];

  }

  next() {
    if (this.activeIndex < this.listImg.getLength() - 1)
    { this.activeIndex++;
  }
    this.currentImg = this.component[this.activeIndex];

  }
}
