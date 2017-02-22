import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
<div>
    <h1>404 error</h1>
    <p>You may be lost. Follow the breadcrumbs back <a routerLink="/">home</a></p>
</div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
