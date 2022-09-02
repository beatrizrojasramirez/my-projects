import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './../../common/classes/user';
import { AuthService } from './../../services/auth.service';
import { UsernameValidators } from 'src/app/common/validators/username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  user:User={id:'0'};

  constructor(private router:Router, private authService:AuthService, private route:ActivatedRoute){}

  form = new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    //Given that the username maybe null (and it's not a valid value for a string), then change the null value to empty string
    this.user.email = this.username?.value || '';
    this.user.password = this.password?.value ||'';

    this.authService.login(this.user)
      .subscribe(result => {
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || 'followers']);
        }else
          this.form.setErrors({invalidLogin: true});
      })

  }
}
