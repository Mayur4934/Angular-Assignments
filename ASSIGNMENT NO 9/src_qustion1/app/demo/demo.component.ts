import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  addret : number = 0;
  subret : number = 0 ;


  constructor(public sobj : ArithmaticService){

  }

  ngOnInit(){

    this.addret=this.sobj.Add(78,75);
    this.subret=this.sobj.Sub(100,85);

  }

}
