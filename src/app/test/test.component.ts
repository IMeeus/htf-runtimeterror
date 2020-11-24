import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  click() {
    this.apiSvc.GetDatacenters().subscribe(res => {
      console.log(res);
    })
  }
}
