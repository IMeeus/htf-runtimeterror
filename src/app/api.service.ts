import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetDatacenters() {
    let headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjA4ODkzLCJleHAiOjE2MDYzODg4OTMsIm5iZiI6MTYwNjIwODg5MywianRpIjoiODJJOHZRTVZkNkJQYzRXdSIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.FxBMX1-EYDlXNBIp43gD0pZVcOikS8HBnhJCDc-jvg0')
    return this.http.get(`https://htf2020.zinderlabs.com/api/datacenters/`, {headers: headers});
  }
}
