import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../DataServices/data.service';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {
public loginForm:any;
isSubmitted:boolean=false;
  constructor(private fb:FormBuilder,private serv:DataService,private route:Router) {
    this.loginForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2)]],
      age:['',[Validators.required,Validators.minLength(2)]],
      empId:['',[Validators.required,Validators.minLength(3)]],
      branch:['',[Validators.required]],
      role:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitForm(){
 console.log(this.loginForm.value);
this.serv.postData(this.loginForm.value).subscribe((res)=>{
  console.log(res);
})
this.isSubmitted=true;
this.route.navigate(['get']);
  }
  get f(){
    return this.loginForm.controls;
  }
}
