import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/UserModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  

  constructor(private router:Router, private user: AuthService ) { }

  ngOnInit() {
  }

  isSubmitted  =  false;


  public loginForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(3)]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  
  onSubmit(){
    this.isSubmitted = true;
    if (this.loginForm.status == "VALID") {
      let storageUser = JSON.parse(localStorage.getItem(this.loginForm.value.username));
      console.log(' where am i',storageUser)
      
      if (storageUser) {
        if (storageUser.username != this.loginForm.value.username || storageUser.password != this.loginForm.value.password) {
          this.errorMessage = "Invalid  UserName or Password";
        } else {
          localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value.username));
          this.user.setName(this.loginForm.value.username);
          this.router.navigate([""]);
        }
      }
      else {
        this.errorMessage = "Invalid Username or password";
      }
    }
  }
  

}
