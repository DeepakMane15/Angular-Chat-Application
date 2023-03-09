import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fireService: FirebaseService) {}
auth:any
  ngOnInit() {
    console.log(firebase.firestore.Timestamp.now())
    this.auth = JSON.parse(localStorage.getItem('user') || "");
     }


  title = 'chat-application';
  message: any;

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  sendMsg() {
    let data = {
      from: this.auth.email,
      to: 'manedeep200@gmail.com',
      uid: this.auth.uid,
      photourl:this.auth.photoURL,
      createdAt: firebase.firestore.Timestamp.now()

    }
    this.fireService.sendMessage(data).then(res => {
      console.log(res);
    })
      .catch(err => console.log(err));
  }
}
