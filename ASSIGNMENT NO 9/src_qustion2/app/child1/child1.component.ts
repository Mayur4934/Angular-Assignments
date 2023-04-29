import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public flag :boolean = false;

  constructor(public nobj : NumberService){



  }

  ngOnInit(){

    this.flag = this.nobj.ChkPrime(66);
    

  }

}
