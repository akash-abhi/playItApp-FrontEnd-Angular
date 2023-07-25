import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public person = {
    firstname : '',
    lastname : '',
    email : '',
    password :'',
    phoneno :''
  }
  
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }


  register(){
    this._userService.createUser(this.person).subscribe(
      (data)=>{
        console.log(data);
        alert("registered successfully...");
      },
      (error)=>{
        console.log(error);
        alert("something went wrong!!!");
      }
    )
    
  }

}
