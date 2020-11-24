import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    DataViewModule,
    CardModule,
    RouterModule.forRoot([
      { path: 'test', component: TestComponent },
      { path: 'datagrid', component: DatagridComponent },
      { path: '', redirectTo: 'test', pathMatch: 'full' }
    ])
  ],
  providers: [
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
