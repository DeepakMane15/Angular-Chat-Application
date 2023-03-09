import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from './header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  data:any;

  constructor(private service: HeaderServiceService, private router: Router){}

  ngOnInit(){
    this.service.GetChats().subscribe(res=>{
      this.data = res.message
    })
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
