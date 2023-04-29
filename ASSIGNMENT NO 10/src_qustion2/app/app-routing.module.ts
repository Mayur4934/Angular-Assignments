import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:'',component:TechnologiesComponent},
  {path:'books',component:BooksComponent},
  {path:'technologies' , component : TechnologiesComponent},
  { path:'**',component:ErrorpageComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
