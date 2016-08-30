import { Component } from '@angular/core';
import {ProfileComponent} from "./components/profile.component";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><profile></profile>',
  directives: [ProfileComponent]
})
export class AppComponent { }
