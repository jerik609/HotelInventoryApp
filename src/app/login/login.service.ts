import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    if (email === "admin@gmail.com" && password === "a") {
      alert("Login successful!");
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
