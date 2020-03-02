import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/model/register-user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  errorMessage = '';
  loading;
  user : RegisterUser = new RegisterUser();

  constructor(private formBuilder : FormBuilder,
              private userservice : UserService,
              private router : Router,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required]]
    });
  }

  onSubmit() {

    console.log('email from forgot:', this.forgotPasswordForm.value);
    this.userservice.sendEmail(this.forgotPasswordForm.value).subscribe((response: any) =>
    {
      console.log("Inside method",response);
      console.log(response.statusCode);
      if(response.statusCode === 200) {
        console.log('Directing to another page')
        //this.router.navigate(['/password-update/:token']);
        this.matSnackbar.open('Link sent to mail, please verify it', 'ok', { duration: 4000 });
      }
      else {
        this.router.navigate(['/forgot-password']);
        this.matSnackbar.open('Error....!', 'Ok', { duration: 4000 });
      }
    },
    error =>
    {
      console.log(error);
      this.router.navigate(['/login']);
      this.loading = false;
      this.errorMessage = 'Please enter a registered email';
      this.matSnackbar.open(error.message, 'Ok', { duration: 4000 });
    });
  }
}
