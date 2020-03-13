import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    console.log("Login values: ", this.loginForm.value);
    if(this.loginForm.invalid) {
      return this.router.navigate(['/login']);
    }
    this.userService.login(this.loginForm.value).subscribe((response: any) =>
    {
       console.log("RESPONSE :",response);
        if(response.statusCode === 200) {
        localStorage.setItem('token', response.object);
        localStorage.setItem('firstName', response.firstName);
        console.log('Name: ', response.firstName);
        console.log('Token: ' , response.object);
        console.log(response.message);
        this.matSnackbar.open(response.message, "Ok", { duration: 4000 });
        return this.router.navigate(['/dashboard']);
      }
    },
    error => {
      this.submitted = false;   
      this.errorMessage = 'invalid credentials';
      this.router.navigate(['/login']);
    });
  }
}