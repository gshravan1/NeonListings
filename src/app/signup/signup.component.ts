import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUserData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    zipcode: '',
    phonenumber: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signupUser() {
    console.log(this.signupUserData)
  }
}
