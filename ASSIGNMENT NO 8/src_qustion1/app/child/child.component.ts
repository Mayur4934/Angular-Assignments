import { EventEmitter, Output } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public str : string = "";

  @Output() public Myevent = new EventEmitter();

  public GetData() {

    this.Myevent.emit(this.str);


  }



  

  


}
