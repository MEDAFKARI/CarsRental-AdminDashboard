import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppstateService } from 'src/app/Core/Services/appstate.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public appstate:AppstateService,
              private router:Router
  ){}

  isCollapsed = false;



  logout() {
    console.log("logout");
    localStorage.clear();
    this.appstate.setUserState({
      Role: '',
      Username:'',
      isAuthenticated:false,
    })
    this.router.navigateByUrl(`/login`);
    }

}
