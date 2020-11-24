import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {

  }

  public Datacenters;
  public Errors;
  login() {
    this.apiSvc.Login();
  }

  datacenters() {
    this.apiSvc.GetDatacenters().subscribe(res => {
      console.log(res);
      this.Datacenters = res;
    })
  }

  ErrorsPerCenter(){

    this.Datacenters.data.forEach(element => {
      this.apiSvc.GetErrorCenter(element.id).subscribe(res => {
        console.log(res);
        this.Errors = res;
      })
    });
    
  }


}
