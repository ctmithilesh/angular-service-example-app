import { Component, OnInit } from '@angular/core';
import { SignUpUserService } from '../services/sign-up-user/sign-up-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  title: string = 'Register'
  description: string = 'Register to Continue!'
  formData = {
    username: '',
    email: '',
    password: '',
  }

  // username: string = ''
  // email: string = ''
  // password: string = ''

  constructor(
    private signUp: SignUpUserService,
    private router: Router

  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  submitData() {

    console.log(this.formData)
    const { username, password, email } = this.formData

    this.signUp.registerUser(username, email, password).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/login'])
      },
      error: (error) => console.log(error)
    })




  }


}
