import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KhoaComponent} from './khoa/khoa.component';
import {GiangvienComponent} from './giangvien/giangvien.component';
import { TaoSuakhoaComponent } from './khoa/tao-suakhoa/tao-suakhoa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'khoa',component:KhoaComponent},
  {path: 'giangvien/:khoaId',component:GiangvienComponent},
  {path: '', component:KhoaComponent},
  {path: '**', component:PageNotFoundComponent}

 // {path: 'tao-suakhoa/:id', component:TaoSuakhoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
