import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dictionary } from '../common/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http:HttpClient) { }
  

  getdictionary(word:string){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    return this.http.get<Dictionary[]>(url);
  }
}

