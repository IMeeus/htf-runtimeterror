import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private authtoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjExNzA4LCJleHAiOjE2MDYzOTE3MDgsIm5iZiI6MTYwNjIxMTcwOCwianRpIjoieVhaQTRkdkFldTdCQXloNyIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.vB5oHhRke15PkVC7JS2vLoG4tXgrpg0iSSmdLZIzNBw.FxBMX1-EYDlXNBIp43gD0pZVcOikS8HBnhJCDc-jvg0'

  constructor(private http: HttpClient) { }

  Login() {
    let login: ILogin = {
      username: 'zinderlabs8',
      password: '4BwjjBfh'
    };

    return this.http.post<ILogin>('https://htf2020.zinderlabs.com/api/auth/login', login);
  }

  GetDatacenters() {
    let headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${this.authtoken}` );
    return this.http.get(`https://htf2020.zinderlabs.com/api/datacenters/`, {headers: headers});
  }
}

interface ILogin {
  username: string,
  password: string
}