import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {

  constructor(public router: Router){}

  againGoTo(){
    this.router.navigate(["./"]);
  }
}
