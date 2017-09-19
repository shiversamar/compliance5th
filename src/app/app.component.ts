import { UserService } from './services/auth/user.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        //NO registration concept they can up to date name 
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}

//implement destroy 