import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  brandId:String;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.brandId = this.route.snapshot.params.id;
    });
    this.getBrandDetail();
  }

  getBrandDetail(){

  }
  
}
