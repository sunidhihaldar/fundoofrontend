import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/model/register-user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.scss']
})
export class UserActivateComponent implements OnInit {

  user: RegisterUser = new RegisterUser();
  activateForm: FormGroup;
  token: string;

  constructor(private userService: UserService,
              private matSnackbar: MatSnackBar,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
    {
      this.token = params.get('token');
    });
  }

  onSubmit() {
    console.log('activate user');
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    console.log('Token: ', this.token);
    this.userService.verifyUser(this.activateForm, this.token).subscribe((response: any) =>
    {
      console.log('Response:', response);
      this.router.navigate(['/login']);
      return this.matSnackbar.open('Your account is verfied', 'Ok', { duration: 4000 });
    },
    error => {
      console.log(error);
      this.matSnackbar.open('Not verified', 'Ok', { duration: 4000 });
    });
  }
} 