import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fireService: FirebaseService) {}
   ngOnInit() {

  }

  signInWIthGoogle(){
    this.fireService.signInWIthGoogle();
  }

}
