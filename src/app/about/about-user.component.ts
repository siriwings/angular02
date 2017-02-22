import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {User} from './../shared/models/user';
import {UserService} from './../shared/services/user.service';

@Component({
  selector: 'app-about-user',
  template: `
<div class="about-user">
    <ul *ngIf="user" class="collection">
    <li class="collection-item avatar">
      <img [src]="user.avatar" alt="" class="circle">
      <span class="title">{{user.name}}</span>
      <p>{{user.username}}</p>
      <a (click)="goBack()" class="secondary-content"><i class="material-icons goback">Go Back</i></a>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./../../materialize/css/materialize.css','about-user.component.css']
})
export class AboutUserComponent implements OnInit {
 user:User;
  constructor(
    private router:Router,
    private route:ActivatedRoute, private service:UserService) { }

  ngOnInit() {
    //grab the current username

    //파라미터 값 얻기.this.route.snapshot.params['~~~~'] 사용.
    let name=this.route.snapshot.params['name']; //파마미터 routing.ts 참고

    this.service.getUser(name).then(user=>this.user=user);

    //this.user=users.find((user)=>user.name===name);

  }


  goBack(){
    //특정 URL로 돌아가기를 만들 때 사용하면 유용하다.
    this.router.navigate(['/about']);
  }
}
