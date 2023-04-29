import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7';

  public str : string = "MArvElloUS InfoSysteMs";
  


  public Uppercase() : string{


    this.str = this.str.toUpperCase();

    return this.str;
  }

  public Lowercase() : string{

    this.str = this.str.toLowerCase();

    return this.str;
  }
}
