import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  // http methods 

  signupUser(firstName:string,lastName:string,email:string,password:string){
   return this.http.post('http://localhost:8000/signup',{firstName,lastName,email,password}).subscribe(
     Response => console.log(Response)
     
     );
  }

}
