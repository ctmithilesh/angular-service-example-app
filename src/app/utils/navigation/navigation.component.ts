import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  title: string = 'SuperTodolist'

  constructor(
    private cookie: CookieService,
    private router: Router
  ) {

  }


  logoutUser() {

    this.cookie.deleteAll()

    this.router.navigate(['/'])

  }

}
