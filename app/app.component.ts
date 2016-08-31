import { Component } from '@angular/core';
import {ProfileComponent} from "./components/profile.component";
import { HTTP_PROVIDERS } from '@angular/http';
import {GithubService} from "./services/github.service";

@Component({
  moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
  directives: [ProfileComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
