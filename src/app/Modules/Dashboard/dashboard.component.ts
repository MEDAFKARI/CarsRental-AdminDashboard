import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isCollapsed = false;
}
