import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  phone;
  email;
  address;

  constructor() { }

  ngOnInit() {
  }

  //=========== form validation function =============
  userFunc(data: NgForm): void {
    if (data.valid) {
      alert("Information saved successfully");
    }
    else {
      alert("Oops! Please enter a valid data.");
    }
  }
}
