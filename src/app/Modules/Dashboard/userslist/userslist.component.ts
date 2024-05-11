import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Core/Services/userservice.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{

  users:any =[]


  constructor(private userService: UserserviceService){}


  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList(){
    this.userService.getUsersList().subscribe({
      next:data=>{
        this.users=data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }




}
