import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PasswordValidator } from 'src/app/util/password-validator';
@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {

  passwordUpdateForm: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activteRoute: ActivatedRoute,
    private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.activteRoute.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
    });
    this.passwordUpdateForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    },
      {
        validator: PasswordValidator('newPassword', 'confirmPassword')
      }
    );
  }

  onSubmit() {
    console.log('Password: ', this.passwordUpdateForm.value);
    console.log('Token: ', this.token);
    this.userService.passwordUpdate(this.passwordUpdateForm.value, this.token).subscribe((response: any) => {
      console.log("fetching response : ", response);
      this.router.navigate(['/login']);
      return this.matSnackbar.open('Password updated sucessfully', 'Ok', { duration: 4000 });
    },
      errors => {
        console.log(errors);
        this.router.navigate(['/password-update/:token']);
        this.matSnackbar.open('Password not updated', 'Ok', { duration: 4000 });
      })
  }
}