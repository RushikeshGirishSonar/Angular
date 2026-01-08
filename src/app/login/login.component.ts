import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = ""
  errormsg = "";

  login(){
    if(this.username.trim().length === 0){
      this.errormsg = "Username is required";
    }
    else if(this.password.trim().length === 0){
      this.errormsg = "Password is required";
    }
    else{
      this.errormsg = "";
    }
  }
}
