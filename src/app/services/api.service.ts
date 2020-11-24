import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjEzMzI1LCJleHAiOjE2MDYzOTMzMjUsIm5iZiI6MTYwNjIxMzMyNSwianRpIjoiakxyNnV4eTBnVWdHUWJpciIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xyJrpxDEFFPwEUFoOn9Q4kwuPpexxgQ-3WgjxIDoFpg"

  constructor(
    private http: HttpClient,
    private cookieSvc: CookieService) 
    { }

  Login() {
    let login: ILoginRequest = {
      username: 'zinderlabs8',
      password: '4BwjjBfh'
    };
    
    this.http.post<ILoginResponse>('https://htf2020.zinderlabs.com/api/auth/login', login).subscribe(res => {
      this.cookieSvc.set('access_token', res.access_token);
    })
  }

  GetDatacenters() {
    let access_token = this.cookieSvc.get('access_token');
    return this.http.get(`https://htf2020.zinderlabs.com/api/datacenters`, 
    { headers: { 'Authorization':`Bearer ${access_token}` } } );
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