import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = { login: '', passwd: '' };
  remember: boolean = false;

  constructor(private auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.user.login = localStorage.getItem('login') || ''
    this.remember = (localStorage.getItem('login') || '').length > 0
  }

  login(event: any) {
    this.auth.authUser(this.user, this.remember).subscribe(u => {
      console.log(u)
      this.user = u;
    },
    e => console.log(e))
  }

}
