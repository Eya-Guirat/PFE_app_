import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  inputType: string = "password";
  eyeIcon: string = "fa fa-eye-slash";

  hideShowPass() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    this.eyeIcon = this.inputType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye';
  }  
  
}
