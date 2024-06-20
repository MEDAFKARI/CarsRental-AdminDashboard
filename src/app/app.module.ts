import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UserslistComponent } from './Modules/Dashboard/userslist/userslist.component';
import { StoreownerlistComponent } from './Modules/Dashboard/storeownerlist/storeownerlist.component';
import { NormalUserListComponent } from './Modules/Dashboard/normal-user-list/normal-user-list.component';
import { LoginComponent } from './Modules/Auth/login/login.component';
import { DashboardComponent } from './Modules/Dashboard/dashboard.component';
import { BrandListComponent } from './Modules/Dashboard/brand-list/brand-list.component';
import { NewBrandComponent } from './Modules/Dashboard/new-brand/new-brand.component';
import { CityListComponent } from './Modules/Dashboard/city-list/city-list.component';
import { NewCityComponent } from './Modules/Dashboard/new-city/new-city.component';
import { UpdateCityComponent } from './Modules/Dashboard/update-city/update-city.component';
import { UpdateBrandComponent } from './Modules/Dashboard/update-brand/update-brand.component';
import { StoreListComponent } from './Modules/Dashboard/store-list/store-list.component';
import { AuthInterceptor } from './Core/iterceptores/auth.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    StoreownerlistComponent,
    NormalUserListComponent,
    LoginComponent,
    DashboardComponent,
    BrandListComponent,
    NewBrandComponent,
    CityListComponent,
    NewCityComponent,
    UpdateCityComponent,
    UpdateBrandComponent,
    StoreListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
