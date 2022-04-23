import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { GetApiDataComponent } from './get-api-data/get-api-data.component';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {path:'get',component:GetApiDataComponent},
  {path:'post',component:InsertDataComponent},
  {path:'put',component:UpdateDataComponent},
  {path:'delete',component:DeleteDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
