import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute , ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public dashboardId;
  constructor( private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'))
      this.dashboardId = id;
    })
  }

  goNext(){
    let nextId = this.dashboardId +1;
    this.router.navigate(['/dashboard' , nextId]);
  }

  goPrevious(){
    let previousId = this.dashboardId -1;
    this.router.navigate(['/dashboard' , previousId]);

  }

  gotoDashboard(){
    let selectedId = this.dashboardId?this.dashboardId:null;
    this.router.navigate(['../',{id:selectedId}], {relativeTo:this.route});
  }


  showDashboard(){
    this.router.navigate(['dashpanel'],{relativeTo:this.route});

  }

  showProfile(){
    this.router.navigate(['profile'],{relativeTo:this.route});

  }
  showPostJob(){
    this.router.navigate(['postjobs'],{relativeTo:this.route});


  }
  showJobs(){
    this.router.navigate(['jobs'],{relativeTo:this.route});
  }



  showCandidates(){
    this.router.navigate(['candidates'],{relativeTo:this.route});
  }



}
