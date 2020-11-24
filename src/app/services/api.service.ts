import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private cookieSvc: CookieService) {}

  Login() {
    let login: ILoginRequest = {
      username: 'zinderlabs8',
      password: '4BwjjBfh'
    };

    this.http.post < ILoginResponse > ('https://htf2020.zinderlabs.com/api/auth/login', login).subscribe(res => {
      this.cookieSvc.set('access_token', res.access_token);
    })
  }

  GetDatacenters(): Promise<IGetDataCentersResponse> {
    let access_token = this.cookieSvc.get('access_token');
    return this.http.get<IGetDataCentersResponse>(`https://htf2020.zinderlabs.com/api/datacenters`, 
      { headers: { 'Authorization':`Bearer ${access_token}` } 
    }).toPromise();
  }

  GetErrorCenter(id: number): Promise<IGetErrorsResponse> {
    let access_token = this.cookieSvc.get('access_token');
    return this.http.get<IGetErrorsResponse>(`https://htf2020.zinderlabs.com/api/datacenters/${id}/errors`, 
      { headers: { 'Authorization':`Bearer ${access_token}` } 
    }).toPromise();
  }

  IsolateDatacenter(id: number): Promise<IIsolateDatacenterResponse> {
    let access_token = this.cookieSvc.get('access_token');
    return this.http.post<IIsolateDatacenterResponse>(`https://htf2020.zinderlabs.com/api/datacenters/${id}/isolate`, {},
      { headers: { 'Authorization':`Bearer ${access_token}` }
    }).toPromise();
  }
}

export interface ILoginResponse {
  access_token: string,
    token_type: string,
    expires_in: number
}

export interface ILoginRequest {
  username: string,
    password: string
}

export interface IGetDataCentersResponse {
  data: IDataCenter[];
}

export interface IDataCenter {
  id: number,
  name: string,
  location: ILocation,
  provider: string,
  inIsolation: boolean
}

export interface ILocation {
  lat: number,
  long: number
}

export interface IGetErrorsResponse {
  data: IError[]
}

export interface IError {
  createdAt: Date,
  datacenterId: number,
  errorTypeId: number,
  errorTypeLabel: string
}

export interface IIsolateDatacenterResponse {
  message: string
}