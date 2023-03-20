import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  username: string = '';
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  login(email: string, password: string): void {
    if (email === "frodo@shire.com" && password === "a") {
      alert(`Hello ${email}, you're NOT an admin`);
      this.isLoggedIn = true;
      this.isAdmin = false;
    } else if (email === "gandalf@shire.com" && password === "a") {
      alert(`Hello ${email}, you're and ADMIN!`);
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    this.username = email;
  }

}
