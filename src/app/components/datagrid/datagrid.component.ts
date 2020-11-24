import { Component, OnInit } from '@angular/core';
import { ApiService, IDataCenter, IError } from '../../services/api.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  items: IItem[] = [];

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.loadGridItems();
  }

  async loadGridItems() {
    let centers = await this.apiSvc.GetDatacenters();

    for (let i = 0; i < centers.data.length; i++) {
      let center = centers.data[i];
      let errors = await this.apiSvc.GetErrorCenter(center.id);
      let newItem: IItem = { datacenter: center, errors: errors.data };
      this.items = [...this.items, newItem];
    }
  }

  click() {
    console.log(this.items);
  }

  async IsolateDatacenter(id: number) {
    let response = await this.apiSvc.IsolateDatacenter(id);
    this.loadGridItems();
  }
}

export interface IItem {
  datacenter: IDataCenter,
  errors: IError[]
}