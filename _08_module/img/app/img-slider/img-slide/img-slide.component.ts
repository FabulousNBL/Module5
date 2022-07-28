import {Component, OnInit, ViewChild, TemplateRef, Input} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent implements OnInit {

  @Input()
  currentImg: '';
  constructor() { }

  ngOnInit() {

  }

}
