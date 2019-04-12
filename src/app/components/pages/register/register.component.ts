import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message: string;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
  }


  isSubmitted  =  false;


  // public registerForm = new FormGroup({
  //   username : new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   confirm_password:  new FormControl('', [Validators.required]),
  // }
  // );

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  
  onSubmit(){
    this.isSubmitted = true;
    console.log(this.registerForm.value)
    if (this.registerForm.status == "VALID") {

      console.log("Validated successfully")
      let user = {
        "username": this.registerForm.value.username,
        "password": this.registerForm.value.password
      };
      // alert("you registered successfully !!");
      this.router.navigate(['login']);
      localStorage.setItem(user.username, JSON.stringify(user));
      this.message = "You've registered successfully!";
    } else {
      console.log("invalid registration")
      console.log(this.registerForm);
    }
  }
  

}
