import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public Count : number = 0;


  public CountCapital(str : string){

    for(let i =0 ;i<str.length;i++){

      if(str[i]>'A' && str[i]<'Z'){

        this.Count++
      }




    }
      return this.Count;
  }
}
