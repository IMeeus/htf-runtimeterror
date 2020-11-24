import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    datacenters;

    constructor(private apisvc: ApiService) { }

    ngOnInit() {
        this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.loading = false;
        //     this.users = users;
        // });
        this.apisvc.GetDatacenters().pipe(first()).subscribe(centers => {
          this.loading = false;
          this.datacenters = centers;
        })
    }
}

