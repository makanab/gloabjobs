import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  candidates

  constructor(private _myService:UserService) { }

  ngOnInit() {

    this._myService.getCandidate().subscribe(
      Response =>{
        this.candidates = Response
      }
    )

    

  }


  

}
