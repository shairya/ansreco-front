import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  brandForm:FormGroup;
  disbleSubmitButton:boolean = true;
  error:String = '';

  constructor( private http:HttpClient, private fb: FormBuilder,private router: Router, private authService: AuthService ) {
    this.brandForm = this.fb.group({
      storeName : ['', Validators.required],
      storeCode : [''],
      storeStatus: ['', Validators.required],
    });
  }

  add(){
    this.disbleSubmitButton = false;
    if(this.brandForm.valid){
      // call api
      var data={storename:this.brandForm.value.storeName,storecode:this.brandForm.value.storeCode,storestatus:this.brandForm.value.storeStatus};
      this.http.post(environment.apiUrl+'/brand/add', data)
      .subscribe(response => {
        if(response.status===200){
          this.router.navigate(['/brand']);
        }else{
          this.error = response.error;
        }
        //this.brands = brands;
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      });
    }
  }
  ngOnInit(){

  }

}
