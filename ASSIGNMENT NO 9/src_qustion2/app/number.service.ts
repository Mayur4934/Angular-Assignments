import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }


  public flag : boolean = false;

  public ChkPrime(num : number ){

    if(num==2){
      this.flag=true;

      return this.flag;
    }

    for(let i = 2 ; i < (num) ; i++){

      

      if(num % i == 0){

        this.flag = false;
        
        break;

      }

      else{
        this.flag = true;
        

      }

    }

    return this.flag;
  }


}
