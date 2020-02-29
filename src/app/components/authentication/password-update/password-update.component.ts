import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
//import { PasswordValidator } from 'src/app/util/password-validator';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  passwordUpdateForm: FormGroup;
  token: string;

  constructor(private userService: UserService,
              private router: Router,
              private activteRoute: ActivatedRoute,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.activteRoute.paramMap.subscribe((params: ParamMap) =>
    {
      this.token = params.get('token');
    }),
    this.passwordUpdateForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmNewPassword: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.token = this.activteRoute.snapshot.paramMap.get('token');
    console.log('Password: ', this.passwordUpdateForm.value);
    console.log('Token: ', this.token);
    this.userService.passwordUpdate(this.passwordUpdateForm, this.token).subscribe((response: any) =>
    {
      console.log('Response: ', response);
      console.log('Status code: ', response.statusCode);
      if(response.statusCode === 200) {
        this.router.navigate(['/login']);
        return this.matSnackbar.open('Password updated sucessfully', 'Ok', { duration: 4000 });
      }
      this.matSnackbar.open('Error', 'Ok', { duration: 4000 });
    },
    error => {
      console.log(error);
      this.router.navigate(['/password-update/:token']);
      this.matSnackbar.open('Password not updated', 'Ok', { duration: 4000 });
    });
  }
}