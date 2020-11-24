import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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
    this.loadItems();
  }

  private reloadItems() {
    this.items = [];
    this.loadItems();
  }

  private async loadItems() {
    let centers = await this.apiSvc.GetDatacenters();

    for (let i = 0; i < centers.data.length; i++) {
      let center = centers.data[i];
      let errors = await this.apiSvc.GetErrorCenter(center.id);

      let newItem: IItem = { 
        id: center.id,
        name: center.name,
        inIsolation: center.inIsolation,
        errorAmount: errors.meta.pagination.total
      };

      this.items = [...this.items, newItem];
      // this.items = this.sort([...this.items, newItem]);
    }
  }
  
  async IsolateDatacenter(id: number) {
    let response = await this.apiSvc.IsolateDatacenter(id);
    this.reloadItems();
  }

  Refresh() {
    this.reloadItems();
  }
}

export interface IItem {
  id: number,
  name: string,
  inIsolation: boolean,
  errorAmount: number
}