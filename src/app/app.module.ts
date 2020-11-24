import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.intercepter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkerService } from './services/marker.service';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TestComponent,
    MapComponent,
    LoginComponent,
    HomeComponent
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DataViewModule,
    CardModule,
    RouterModule.forRoot([
      { path: 'test', component: TestComponent },
      { path: 'map', component: MapComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },

      { path: '*', redirectTo: 'login', pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
      { path: 'datagrid', component: DatagridComponent },
      { path: '', redirectTo: 'test', pathMatch: 'full' }
    ])
  ],
  providers: [
    ApiService,
    CookieService,
    MarkerService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
