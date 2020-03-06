import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show: boolean = true;
  name = localStorage.firstName;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeView(show: boolean) {
    this.show = !show;
    console.log(this.show);
  }

  logout() {
    console.log('Logged out', name);
    localStorage.clear();
    this.router.navigate(['login']);
  }
}