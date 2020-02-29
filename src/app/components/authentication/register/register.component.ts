import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  loading = false;

  constructor(private userService : UserService,
             private router : Router, 
             private matSnackbar : MatSnackBar) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      mobileNumber : new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]),
      password : new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    console.log('Registration values', this.registerForm.value);
    if(this.registerForm.invalid) {
      return this.router.navigate(['/register']);
    }
    this.userService.registration(this.registerForm.value).subscribe((response : any) =>
    {
      console.log('Message: ', response.message);
      this.router.navigate(['/login']);
      this.matSnackbar.open(response.message, "ok", { duration : 4000});
    },
    error => {
      this.loading=false;
    }
    );
  }

}
