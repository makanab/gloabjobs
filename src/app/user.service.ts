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
   return this.http.post('http://localhost:8000/signup',{firstName,lastName,email,password})
   .subscribe(Response =>{
      console.log(Response);
    });
    
  }


  getUsers(){
    return this.http.get('http://localhost:8000/users')
  }



  deleteUser(userId:string){
    return  this.http.delete('http://localhost:8000/user/' +userId)
    .subscribe(()=> {
      console.log('!Deleted'+ userId);
    });
    
  }


  // add jobs 

  postJob(jobTitle:string, jobDescription:string,jobRequirement:string,Deadline:string){
    return  this.http.post('http://localhost:8000/job',{jobTitle, jobDescription,jobRequirement,Deadline} )
    .subscribe(Response=>{console.log(Response)},
    err=>{
      console.log(err);
    }
    
    
    )
  }



  // get jobs 

  getJobs(){
    return this.http.get('http://localhost:8000/job');
  }

  
  // delete job


  deleteJob(JobId:string){
    return  this.http.delete('http://localhost:8000/job/' +JobId)
    .subscribe(()=> {
      console.log('!Deleted'+ JobId);
    });
   
  }
  



  // post candidate info 

   postCandidate(firstName:string,lastName:string,email:string,coverletter:string ,skils:string){
     return this.http.post('http://localhost:8000/candidate' ,{firstName,lastName,email,coverletter,skils})
     .subscribe(Response=>console.log(Response));

   }



  //  get candidate info 
  getCandidate(){
    return this.http.get('http://localhost:8000/candidate')
  }


  // delete candidate
  deleteCandidate(){

  }






  






}
