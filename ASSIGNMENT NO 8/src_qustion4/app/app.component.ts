import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment8';

  public str : string ="";
  public num : number = 0;

  public GetData(name : any){

     this.num = name.length;

     this.str ="WELCOME " + name;
    
    //  _two way binding (template reference variable)

  }
  
  




 
}
