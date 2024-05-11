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
import { CityListComponent } from './Modules/Dashboard/city-list/city-list.component';
import { NewCityComponent } from './Modules/Dashboard/new-city/new-city.component';
import { UpdateBrandComponent } from './Modules/Dashboard/update-brand/update-brand.component';
import { UpdateCityComponent } from './Modules/Dashboard/update-city/update-city.component';
import { StoreListComponent } from './Modules/Dashboard/store-list/store-list.component';

const routes: Routes = [
  
  { path: '' ,component:DashboardComponent,children:[
    {path:'dashboard', component:UserslistComponent},
    { path: 'storeowner', component:StoreownerlistComponent},
    { path: 'normaluser', component:NormalUserListComponent},
    { path: 'stores', component:StoreListComponent},
    { path: 'city', component:CityListComponent},
    { path: 'addCity', component:NewCityComponent},
    { path: 'updateCity/:id', component:UpdateCityComponent},
    { path: 'brands', component:BrandListComponent},
    { path: 'addBrand', component:NewBrandComponent},
    { path: 'updateBrand/:id', component:UpdateBrandComponent},
    
  ]},
  
  
  { path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
