import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
  public loginDetails ={
    email:"",
    password:"",
  }

  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    
    this._userService.loginUser(this.loginDetails).subscribe(
      (data)=>{
        
        console.log(data)
        alert("success login")
        this._router.navigate(['/dashboard']);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
 
}
