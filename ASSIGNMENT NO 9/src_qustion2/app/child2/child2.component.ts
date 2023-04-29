import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public Count : number = 0;

  constructor(public sobj : StringService){


  }

  ngOnInit(){

    this.Count = this.sobj.CountCapital("MaYuR BHai");

  }


}
