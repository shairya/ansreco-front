import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
//import { Subject } from 'rxjs';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:any;
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject = new Subject();
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.dtOptions = {
      //pagingType: 'full_numbers',
      pageLength: 20
    };
    this.http.get(environment.apiUrl+'/getbrands')
      .subscribe(brands => {
        this.brands = brands;
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      });
    }
}
