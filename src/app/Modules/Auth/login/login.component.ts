import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginReq!:FormGroup;

  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ){}


  ngOnInit(): void {
    this.loginReq=this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    })
  }


  HandleLogin(){
    if (this.loginReq.valid) {
      console.log(this.loginReq.value)
      this.authService.login(this.loginReq.value).subscribe({
        next:data=>{
          console.log(data);
          this.authService.logUser(data.role,data.accessToken)
        },
        error:err=>{

        }
      })
    }
    
  }

}
