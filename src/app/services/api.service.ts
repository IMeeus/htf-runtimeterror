import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private authtoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjEzMzI1LCJleHAiOjE2MDYzOTMzMjUsIm5iZiI6MTYwNjIxMzMyNSwianRpIjoiakxyNnV4eTBnVWdHUWJpciIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xyJrpxDEFFPwEUFoOn9Q4kwuPpexxgQ-3WgjxIDoFpg"

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
    console.log(headers);

    // const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.authtoken}` })
    return this.http.get(`https://htf2020.zinderlabs.com/api/datacenters`, {headers: { 'Authorization': `Bearer ${this.authtoken}` }});
  }

  GetErrorCenter(id){
    let headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${this.authtoken}` );
    console.log(headers);

    return this.http.get(`https://htf2020.zinderlabs.com/api/datacenters/${id}/errors`, {headers: { 'Authorization': `Bearer ${this.authtoken}` }});

  }
}

interface ILogin {
  username: string,
  password: string
}