import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent},
  { path: "todoPage", component: TodoPageComponent},
  { path: "review", component: ReviewPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
