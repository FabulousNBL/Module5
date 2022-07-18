import {Component, OnInit} from '@angular/core';
import {ColorPicker} from "../color-picker";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  get colorP(): ColorPicker {
    return this._colorP;
  }

  _colorP: ColorPicker = {}

  constructor() {
  }

  ngOnInit(): void {
  }
}
