import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginUserService } from 'src/app/services/login-user/login-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  title: string = 'Login'
  description: string = 'Login to Continue!'
  formData = {
    email: '',
    password: ''
  }


  email: string = ''
  accessToken: string = ''

  constructor(
    private loginUser: LoginUserService,
    private cookie: CookieService,
    private router: Router

  ) {

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


  submitData() {
    console.log(this.formData)

    const { email, password } = this.formData

    this.loginUser.loginUser(email, password).subscribe({
      next: (data: any) => {
        console.log(data)
        this.accessToken = data.accessToken
        this.email = data.email
        this.cookie.set('email', this.email)
        this.cookie.set('token', this.accessToken)

        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
