import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl , FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService) {

      this.loginForm = this.createLoginForm();
     }

  ngOnInit(): void {
    
  }
  createLoginForm():FormGroup{
    return this.formBuilder.group({
      username: ["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        localStorage.setItem("token",response.userToken);
        localStorage.setItem("username",response.userName);
      },responseError=>{
        console.log(responseError)
      })
    }
  }
}
