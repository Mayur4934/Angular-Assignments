import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public flag : boolean = false;
  public Count : number = 0;

  constructor(public sobj : StringService,public nobj : NumberService){

  }

  ngOnInit(){

    this.flag = this.nobj.ChkPrime(7);
    this.Count = this.sobj.CountCapital("MayuR");

  }

}
