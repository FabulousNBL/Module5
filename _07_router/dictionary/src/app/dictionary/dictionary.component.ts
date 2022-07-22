import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../dictionary";
import {DictionerService} from "../service/dictioner.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  diction: Dictionary[]= [];
  constructor(private dictionaryService: DictionerService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.diction = this.dictionaryService.getAll()
  }
}
