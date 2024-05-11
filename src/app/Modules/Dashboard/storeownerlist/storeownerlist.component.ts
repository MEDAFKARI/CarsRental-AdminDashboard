import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Core/Services/userservice.service';

@Component({
  selector: 'app-storeownerlist',
  templateUrl: './storeownerlist.component.html',
  styleUrls: ['./storeownerlist.component.css']
})
export class StoreownerlistComponent implements OnInit{

  users:any =[]
  constructor(private userService: UserserviceService){}

  ngOnInit(): void {
    this.loadStoreOwnerList();
  }

  loadStoreOwnerList(){
    this.userService.getStoreOwnerList().subscribe({
      next:data=>{
        this.users=data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }


}
