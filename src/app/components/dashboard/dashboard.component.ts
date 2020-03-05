import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  changeView(show: boolean) {
    this.show = !show;
    console.log(this.show);
  }
}
