import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  contentsList:any = [];
  value:string = "";
  todoGroup = new FormGroup({
    taskHere: new FormControl('')
  })

  constructor(public router: Router){}
  
  submitTask(){
    if(this.todoGroup.controls.taskHere.touched == true && this.todoGroup.controls.taskHere.value != ""){
      this.contentsList.push((this.todoGroup.controls.taskHere.value)?.toString());
    }
  }

  finalizeList(){
    if(this.contentsList.length > 0){
      this.router.navigate(["./review"])
    }
  }

}
