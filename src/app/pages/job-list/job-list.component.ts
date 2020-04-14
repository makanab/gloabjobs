import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs;

  constructor( private _myservices:UserService) { }

  ngOnInit() {
    this._myservices.getJobs().subscribe(
      Response=>{
      this.jobs =Response;
      }
      )

  }

}
