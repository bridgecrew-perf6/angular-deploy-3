import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../DataServices/data.service';

@Component({
  selector: 'app-get-api-data',
  templateUrl: './get-api-data.component.html',
  styleUrls: ['./get-api-data.component.css']
})
export class GetApiDataComponent implements OnInit {
public user:any;

public deleteData:any;
  constructor(private temp_serv:DataService,private router:Router) { 

    
this.getData();
   
  }

getData(){
  this.temp_serv.getData().subscribe((res)=>{
    console.log(res);
    this.user=res;
    this.deleteData =res;

  })
}

  ngOnInit(): void {
  }


  onEdit(id:any,data:any){
  
    console.log(data);
    console.log(id);
  this.temp_serv.setMessage(id,data);
    this.router.navigate(['put']);
  }


  onDelete(data1:any){
    console.log(data1);
    let temp =  confirm('are you sure you want to delete');
    console.log(temp);
    if(temp === true ){
      this.temp_serv.deleteData(data1).subscribe((res)=>{
      console.log(res);
      console.log(this.deleteData)
       if(this.deleteData.length > 0){
          this.getData();
       }
    
    })
   }else{

   }
  }

}
