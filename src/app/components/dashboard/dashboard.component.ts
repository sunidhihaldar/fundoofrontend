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
  pic = 'assets/icons/index.png';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  refresh(): void {
    window.location.reload();
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

  navigateToNotes() {
    this.router.navigate(['dashboard/note']);
  }

  navigateToReminder() {
    this.router.navigate(['dashboard/reminder']);
  }
}