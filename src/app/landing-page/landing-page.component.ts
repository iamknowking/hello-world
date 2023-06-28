import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(public router: Router){}

  loginUser(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
    if(this.loginForm.controls.email.value != "" && this.loginForm.controls.password.value != ""){
      this.router.navigate(['./todoPage']);
    }
  }

}
