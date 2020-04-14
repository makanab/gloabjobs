import { Component, OnInit ,Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  @Input() jobTitle:string;
  @Input() jobDescription:string;
  @Input() jobRequirement:string;
  @Input() Deadline:string;


  constructor(private _myService:UserService) { }

  ngOnInit() {


  }

   onSubmit(){
     this._myService.postJob(this.jobTitle,this.jobDescription,this.jobRequirement,this.Deadline);
   }
 



}
