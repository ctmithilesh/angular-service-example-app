import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'angular-service-example-app';
  users: Array<any> = []
  error: boolean = false
  errorMessage: string = ''
  constructor() {


  }

  // lifecylce method
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.





  }

}
