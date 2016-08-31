import { Component } from '@angular/core';
import {ProfileComponent} from "./components/profile.component";
import { HTTP_PROVIDERS } from '@angular/http';
import {GithubService} from "./services/github.service";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><profile></profile>',
  directives: [ProfileComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
