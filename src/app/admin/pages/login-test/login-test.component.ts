import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.scss']
})
export class LoginTestComponent {
  username: string='neelan';
  password: string='password';
  HideLogin:boolean=false;
  LoginMessage:string='';
  ngFormClass:string=''; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.authenticate(this.username, this.password)) {
      // Redirect to the home page or a protected route
      this.ngFormClass='opacity-25';      
      this.LoginMessage='success';      
      setTimeout(() => { 
        this.HideLogin=true; 
        this.router.navigate(['admin', 'dashboard']);

      }, 0);
    } else {
      // Display an error message
      this.LoginMessage='error';      
    }
  }

  ngOnInit() {

  }

}  