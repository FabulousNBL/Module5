import { Injectable } from '@angular/core';
import {Dictionary} from "../dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionerService {
  dictionary: Dictionary[]=[
    { word: 'dog', meaning: 'Con chó', type: 'DT'},
    { word: 'cat', meaning: 'Con mèo', type: 'DT'},
    { word: 'bird', meaning: 'Con chim', type: 'DT'},
    { word: 'worm', meaning: 'Con sâu', type: 'DT'},
  ]
  constructor() { }

  getAll(){
    return this.dictionary;
  }

  findByWord(mean: string){
    return this.dictionary.find(dic => dic.word === mean)
  }


}
