import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'customer/edit/:id', component: CustomerEditComponent},
   {path: 'customer/new', component: CustomerEditComponent},
   {path: '**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
