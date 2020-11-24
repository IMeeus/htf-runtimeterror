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
    this.apiSvc.Login().subscribe(res => {
      console.log(res);
    })
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

// export class DataCenter{
//   id:number;
//   inIsolation: boolean;
//   location: {
//     lat: number
//     lng: number
//   }
//   name: string
//   provider : string
// }

// export class Error{
//   createdAt: Date;
//   datacenterId: boolean;
//   location: {
//     lat: number
//     lng: number
//   }
//   name: string
//   provider : string
// }

