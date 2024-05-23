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
import { AuthenticationGuard } from './Core/Guards/authentication.guard';
import { AuthorizationGuard } from './Core/Guards/authorization.guard';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', canActivate:[AuthenticationGuard,AuthorizationGuard],component:DashboardComponent,children:[
    {path:'dashboard',canActivate:[AuthenticationGuard,AuthorizationGuard], component:UserslistComponent},
    { path: 'storeowner',canActivate:[AuthenticationGuard,AuthorizationGuard], component:StoreownerlistComponent},
    { path: 'normaluser',canActivate:[AuthenticationGuard,AuthorizationGuard], component:NormalUserListComponent},
    { path: 'stores',canActivate:[AuthenticationGuard,AuthorizationGuard], component:StoreListComponent},
    { path: 'city',canActivate:[AuthenticationGuard,AuthorizationGuard], component:CityListComponent},
    { path: 'addCity',canActivate:[AuthenticationGuard,AuthorizationGuard], component:NewCityComponent},
    { path: 'updateCity/:id', canActivate:[AuthenticationGuard,AuthorizationGuard],component:UpdateCityComponent},
    { path: 'brands',canActivate:[AuthenticationGuard,AuthorizationGuard], component:BrandListComponent},
    { path: 'addBrand', canActivate:[AuthenticationGuard,AuthorizationGuard],component:NewBrandComponent},
    { path: 'updateBrand/:id', canActivate:[AuthenticationGuard,AuthorizationGuard],component:UpdateBrandComponent},
    
  ]},
  
  
  { path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
