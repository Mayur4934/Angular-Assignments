import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public MessageFromParent : string="";

  @Output() Myevent = new EventEmitter();

  public SendData(){


    this.Myevent.emit("Hello from child component");
  }





}
