import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';

import {
  environment
} from 'src/environments/environment';
import {
  CookieService
} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject < ILoginResponse > ;
  public currentUser: Observable < ILoginResponse > ;
  cookieSvc: CookieService;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject < ILoginResponse > (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ILoginResponse {
    return this.currentUserSubject.value;
  }

  login(name: string, pass: string) {
    let usr: ILoginRequest = {
      username: name,
      password: pass
    };

    // this.http.post < any > (`${environment.apiUrl}/login`, usr).subscribe(res => {
    //   this.cookieSvc.set('access_token', res.access_token);
    //   res.pipe(map(user => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     // this.currentUserSubject.next(user);
    //     return user;
    //   }));
    // })
    return this.http.post < ILoginResponse > (`${environment.apiUrl}/auth/login`,usr)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}


interface ILoginResponse {
  access_token: string,
    token_type: string,
    expires_in: number
}

interface ILoginRequest {
  username: string,
    password: string
}
