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
  repos = [];
  username:string;
  constructor(private _githubService: GithubService){
    //this.user = false;
  }

  searchUser(){
    this._githubService.updateUser(this.username);
    this.loadUserProfile();
  }

  private loadUserProfile(){
    this._githubService.getUser().subscribe(user => {
      console.log("User: " );
      console.log(user);
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      console.log("Repos: " );
      console.log(repos);
      this.repos = repos;
    })
  };
}
