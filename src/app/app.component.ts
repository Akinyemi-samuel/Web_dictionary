import { Component, OnInit } from '@angular/core';
import { Dictionary } from './common/dictionary';
import { DictionaryService } from './services/dictionary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  issit:Boolean =true;

  dictionary!:Dictionary;
  defination!:string;
  example!:string;
  partOfSpeech!:string;
  constructor(private service:DictionaryService) {
    
  }
  ngOnInit(): void {
    this.getWord("welcome")
  }



  submit(arg0: string) {
  this.getWord(arg0)
  }

  getWord(arg0:string){
    this.service.getdictionary(arg0).subscribe(
      data =>{
       this.dictionary = data[0]
      this.defination = this.dictionary.meanings[0].definitions[0].definition;
      
      if(this.dictionary.meanings[0].definitions[0].example != null){
        this.example = this.dictionary.meanings[0].definitions[0].example;
      }else if(this.dictionary.meanings[0].definitions[1].example != null){
        this.example = this.dictionary.meanings[0].definitions[1].example;
      }else{
        this.example = this.dictionary.meanings[0].definitions[2].example;
      }
      this.partOfSpeech = this.dictionary.meanings[0].partOfSpeech;
      }
    )
  }


}
