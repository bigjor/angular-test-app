import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = '/assets/users.json';

  authUser(user: User, remember: boolean): Observable<User> {
    return this.http.get<User>(this.url).pipe(map(u => {
      u['passwd'] = user.passwd
      localStorage.setItem('token', u.token || '')
      if (remember) localStorage.setItem('login', u.login || '')
      else localStorage.removeItem('login')
      return u
    }))
  }

  logout(): void {
    localStorage.removeItem('token');
    // localStorage.removeItem('login');
  }

  isAuth(): boolean {
    return (localStorage.getItem('token')?.length || 0) > 0;
  }
}
