import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
public id:any=new BehaviorSubject(5);
public data:any=new BehaviorSubject('');
public currentId=this.id.asObservable()
public currentData= this.data.asObservable()
// public id1:any=new BehaviorSubject(5);
// public currentId1=this.id.asObservable()

  constructor(private http:HttpClient) { 

  
  }

  setMessage(id:any,data:any){
    this.id.next(id);
    this.data.next(data);
  }

  getMessage(){
    return this.currentId,this.currentData;
  }

  // setId(data1:any){
  //   this.id1.next(data1);
  // }
  // getId(){
  //  return this.currentId1;
  // }
  getData(){
   return this.http.get('http://localhost:3000/api/getAllCourses');
  }

  postData(data:any){
   return this.http.post('http://localhost:3000/api/insertCourses',data);
  }
  //  getAllData(){
  //   return this.http.get('http://localhost:3000/api/insertCourses');
  //  }

  editData(id:any,data:any){
    return this.http.put('http://localhost:3000/api/updateCourses/'+id,data);
  }

  deleteData(id:any){
    return this.http.delete('http://localhost:3000/api/deleteCourses/'+id);
  }
}
