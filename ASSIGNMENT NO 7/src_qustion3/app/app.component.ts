import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7';

  public str : string="Marvellous Infosystems";

  public fun() : string{

    this.str="Educating for better tommorow";

    return this.str;

  }

}
