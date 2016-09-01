import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username: string;
  private clientId = 'a7258c6ef78ba1096e46';
  private clientSecret = 'e0b88abf8ecfc5407fb6342a09aef54218d7f04c';

  constructor(private _http: Http){
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id='+this.clientId+'&client_secret='+this.clientSecret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id='+this.clientId+'&client_secret='+this.clientSecret)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}

