import { Component, OnInit, Input} from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() email:string;
  @Input() coverlater:string;
  @Input() skills:string;

  constructor( private _myServices:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._myServices.postCandidate(this.firstName,this.lastName, this.email,this.coverlater,this.skills)

  }

}
