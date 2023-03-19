import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {
  }

  login() {
    if (this.email === "admin@gmail.com" && this.password === "a") {
      alert("Login successful!");
      //this.router.navigate(['/rooms', 'add']);
      this.router.navigateByUrl('/rooms/add');
    }
  }
}
