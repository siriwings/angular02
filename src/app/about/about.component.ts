import { Component, OnInit } from '@angular/core';
import {User} from './../shared/models/user';
import {UserService} from './../shared/services/user.service';

@Component({
  selector: 'app-about',
  template: `

    <ul *ngIf="users" class="collection">
    <li *ngFor="let user of users" class="collection-item avatar">
      <img [src]="user.avatar" alt="" class="circle" [routerLink]="['/about',user.name]">
      <span class="title">{{user.name}}</span>
      <p>{{user.username}}</p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </ul>
  `,
  styleUrls: ['./../../materialize/css/materialize.css','about.component.css']
})
export class AboutComponent implements OnInit {
  users:User[];
  constructor(private service: UserService) { }

  ngOnInit() {

    this.service.getUsers().then(users=>this.users=users);
  }

}
