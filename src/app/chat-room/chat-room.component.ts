import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(){}

user:any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')|| "") .photoURL
  }
  messages=[
    {name:"Deepak",message:"hi"},
    {name:"Raj",message:"hi"},
    {name:"Deepak",message:"hi"},
    {name:"Raj",message:"hi"},
    {name:"Deepak",message:"hi"},
    {name:"Raj",message:"hi"},
    {name:"Deepak",message:"hi"},
    {name:"Raj",message:"hi"},
    {name:"Deepak",message:"hi"},
    {name:"Raj",message:"hi"},
    {name:"Deepak",message:"hi"}
  ]
}
