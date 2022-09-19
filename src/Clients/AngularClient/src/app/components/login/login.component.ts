import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl , FormGroup, Validators } from '@angular/forms';
import { UserLoginRequest } from 'src/app/models/UserModel/UserLoginRequest';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginModel:UserLoginRequest = {
    username:"mucahittanacioglu",
    password:"asdasd"
  };
  constructor(
    private authService:AuthService) {  }

  ngOnInit(): void {
    
  }
  
  login(){
      this.authService.login(this.userLoginModel).subscribe(response=>{
        localStorage.setItem("token",response.userToken);
        localStorage.setItem("username",response.userName);
      },responseError=>{
        console.log(responseError)
      })
    
  }
}
