import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [

      {
        path:'',
        redirectTo:'/dashboard',
         pathMatch:'full'
      },
      {        
        path:'dashboard',
        component:DashboardComponent,
        children:[
          {
            path:'',
            redirectTo:'/dashpanel',
            pathMatch:'full'

          },
          {
            path:'dashpanel',
            component:PanelComponent
    
          },
          {
            path:'profile',
            component:ProfileComponent
          },{
            path:'jobs',
            component:JobListComponent
          },
          {
            path:'postjobs',
            component:PostJobComponent
          },{
            path:'candidates',
            component:UsersComponent
          }
        ]
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export  const RoutingComponents = [

]
