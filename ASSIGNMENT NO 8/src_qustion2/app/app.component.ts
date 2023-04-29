import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment8';

  public Message :string ="HELLO from parent";

  public Messagefromchild : string = "";
}
