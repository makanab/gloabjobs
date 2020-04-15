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


  // update job 
  updateJob(candidateId:string,firstName:string,lastName:string,email:string,coverletter:string ,skils:string){
    const url = 'http://localhost:8000/job/'
    return this.http.put(`${url}/${candidateId}`,{firstName,lastName,email,coverletter ,skils});


  }

  
  // delete job

  deleteJob(jobId:string){
    return  this.http.delete('http://localhost:8000/job/' +jobId)
    .subscribe(()=> {
      console.log('!Deleted'+ jobId);
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

  // update candidate 
  updateCandidate(candidateId:string,firstName:string,lastName:string,email:string,coverletter:string ,skils:string){
    const url = 'http://localhost:8000/candidate/'
    return this.http.put(`${url}/${candidateId}`,{firstName,lastName,email,coverletter ,skils});


  }


  // delete candidate
  deleteCandidate(candidateId:string){
    return  this.http.delete('http://localhost:8000/candidate/' +candidateId)
    .subscribe(()=> {
      console.log('!Deleted'+ candidateId);
    });
    
    

  }






  






}
