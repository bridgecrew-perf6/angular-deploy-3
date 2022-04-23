import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../DataServices/data.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  public loginForm:any;
  isSubmitted:boolean=false;
  public home:any
    constructor(private fb:FormBuilder,private serv:DataService,private route:Router) {
this.serv.getMessage().subscribe((res:any)=>{
  console.log(res);
  console.log(res.id);
  this.home=res;
console.log(this.home.name);
})

this.loginForm = this.fb.group({
        name:[this.home.name],
        age:[this.home.age],
        empId:[this.home.empId],
        branch:[this.home.branch],
        role:[this.home.role]
      })

      // this.loginForm.name =this.home.name;
     }
  
    ngOnInit(): void {
    }
  
    submitForm(){
   console.log(this.loginForm.value);
   this.serv.editData(this.home.id,this.loginForm.value).subscribe((res)=>{
    console.log(res);
  })
  this.isSubmitted=true;
  this.route.navigate(['get']);
    }
    get f(){
      return this.loginForm.controls;
    }
}
