import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserslistComponent } from './Modules/Dashboard/userslist/userslist.component';
import { StoreownerlistComponent } from './Modules/Dashboard/storeownerlist/storeownerlist.component';
import { NormalUserListComponent } from './Modules/Dashboard/normal-user-list/normal-user-list.component';
import { LoginComponent } from './Modules/Auth/login/login.component';
import { DashboardComponent } from './Modules/Dashboard/dashboard.component';
import { BrandListComponent } from './Modules/Dashboard/brand-list/brand-list.component';
import { NewBrandComponent } from './Modules/Dashboard/new-brand/new-brand.component';

const routes: Routes = [
  
  { path: '' ,component:DashboardComponent,children:[
    {path:'dashboard', component:UserslistComponent},
    { path: 'storeowner', component:StoreownerlistComponent},
    { path: 'normaluser', component:NormalUserListComponent},
    { path: 'stores', component:NormalUserListComponent},
    { path: 'city', component:StoreownerlistComponent},
    { path: 'addCity', component:NormalUserListComponent},
    { path: 'brands', component:BrandListComponent},
    { path: 'addBrand', component:NewBrandComponent},
  ]},
  
  
  { path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
