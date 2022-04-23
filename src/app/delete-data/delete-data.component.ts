import { Component, OnInit } from '@angular/core';
// import { DataService } from '../DataServices/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../DataServices/data.service';
@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
public loginForm:any
public id:any;
  constructor(private fb:FormBuilder,private serv:DataService,private route:Router) {
    // this.loginForm = this.fb.group({
    //   id:['',[Validators.required]],
    // })

    // this.serv.getId().subscribe((res:any)=>{
    //   console.log(res);
    //   this.id=res;
    // })

    // this.serv.deleteData(this.id).subscribe((res)=>{
    //   console.log(res);
    // });
  }

  ngOnInit(): void {
  }
  // submitForm(){
  //   this.serv.deleteData(2).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }

}
