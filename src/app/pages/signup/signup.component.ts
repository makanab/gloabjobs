import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;
  @Input() password:string;

  users:any;
  showusers:boolean;

  constructor(private _userservice:UserService) { }

  ngOnInit() {

    this._userservice.getUsers()
    .subscribe(
      Response =>{
        this.users = Response
        if(Response == '' ){
          this.showusers = false;
        }  else{
          this.showusers = true;

        }
        
        console.log(Response);
      }
    )




  }

  onSubmit(){
    this._userservice.signupUser(this.firstName,this.lastName,this.email,this.password);
    console.log(this.firstName,this.lastName,this.email,this.password)
    

  }

  








}
