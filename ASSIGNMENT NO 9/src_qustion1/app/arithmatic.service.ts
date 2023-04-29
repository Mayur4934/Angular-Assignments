import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { 

  }

  num3 : number = 0;

  num4 : number = 0;

  

  public Add(num1 : number , num2 : number){

    this.num3 = num1 + num2;

    return this.num3;
  }


  public Sub(num1 : number , num2 : number){

    this.num4 = num1 - num2;

    return this.num4;
  }


  
}
