import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsername = 'neelan';
  private validPassword = 'password';

  authenticate(username: string, password: string): boolean {
    return username === this.validUsername && password === this.validPassword;
  }
}