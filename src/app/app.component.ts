import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApplication';

  constructor(private router:Router){

  }
  
  addData(){
    this.router.navigate(['post'])
  }

}
