import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  email: string = ''
  description: string = 'Click get started to proceed!'
  constructor(
    private cookie: CookieService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.email = this.cookie.get('email')

  }

  navigateTo() {

    this.router.navigate(['/add-todo'])

  }

}
