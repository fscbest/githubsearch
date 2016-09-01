import { Component } from '@angular/core';
import {GithubService} from "../services/github.service";
import 'rxjs/add/operator/map';
import any = jasmine.any;

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  user = [];
  constructor(private _githubService: GithubService){
    this._githubService.getUser().subscribe(user => {
      console.log("User: " );
      console.log(user);
      this.user = user;
    })
  }
}
