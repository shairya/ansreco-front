import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from './../../environments/environment';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  disbleSubmitButton:boolean = true;

  constructor( private fb: FormBuilder,private router: Router, private authService: AuthService ) {
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

  }

  login(){
    this.disbleSubmitButton = false;
    if(this.loginForm.valid){
      // call api
      var a={name:'sam'};
      localStorage.setItem('user',JSON.stringify(a));
      this.router.navigate(['/profile']);
    }
  }

  logout(){
    this.authService.SignOut();
  }

}
