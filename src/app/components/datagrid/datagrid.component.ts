import { Component, OnInit } from '@angular/core';
import { ApiService, IDataCenter } from '../../services/api.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  datacenters: IDataCenter[];

  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.apiSvc.GetDatacenters().subscribe(res => this.datacenters = res.data);
  }

}
