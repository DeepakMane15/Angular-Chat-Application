import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  allUsers:any;

  chats=[
  {name:'Deepak',message:'hello'},
  {name:'Amit',message:'hi'},
  {name:'Raj',message:'98989393902'},
  {name:'Rahul',message:'How are you?'}

  ]

  constructor(private fireService: FirebaseService) {
  }

  ngOnInit() {
    this.fireService.getusers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, value : c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.allUsers = data;
    });
  }

}
