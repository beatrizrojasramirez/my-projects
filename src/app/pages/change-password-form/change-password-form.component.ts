import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from 'src/app/common/validators/password.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  form = new FormGroup({
    currentPassword:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      PasswordValidators.cannotContainSpace
    ], PasswordValidators.validCurrentPassword),
    newPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      PasswordValidators.cannotContainSpace
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      PasswordValidators.cannotContainSpace
    ])
  },PasswordValidators.passwordMustMatch)
  constructor(){}
  ngOnInit():void{}
  get currentPassword(){
    return this.form.get('currentPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }
   get confirmPassword(){
    return this.form.get('confirmPassword');
   }

  changePassword(){
    /*let isValid = authService.login(this.form.value);
    if (!isValid){
      this.form.setErrors({
        invalidLogin: true
      });
    }*/
    this.form.setErrors({
      invalidPassword: true
    });

  }
}
