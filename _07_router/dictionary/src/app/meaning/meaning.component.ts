import { Component, OnInit } from '@angular/core';
import {DictionerService} from "../service/dictioner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Dictionary} from "../dictionary";

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css']
})
export class MeaningComponent implements OnInit {
  dictionary: Dictionary;


  searchForm: FormGroup = new FormGroup({
    id: new FormControl(),
    word: new FormControl(),
    meaning: new FormControl()
  })
  constructor(private dictionaryService: DictionerService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const word = this.activatedRouter.snapshot.params.word;
    this.dictionary = this.dictionaryService.findByWord(word);
    }


}
