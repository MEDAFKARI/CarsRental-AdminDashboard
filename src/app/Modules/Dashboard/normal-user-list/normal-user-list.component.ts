import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Core/Services/userservice.service';

@Component({
  selector: 'app-normal-user-list',
  templateUrl: './normal-user-list.component.html',
  styleUrls: ['./normal-user-list.component.css']
})
export class NormalUserListComponent implements OnInit {

  
  users:any =[]


  constructor(private userService: UserserviceService,
              private router:Router
  ){}


  ngOnInit(): void {
    this.loadNormalUserList();
  }

  loadNormalUserList(){
    this.userService.getNormalUserList().subscribe({
      next:data=>{
        this.users=data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  handleDeleteAccount(id:string) {
   console.log(id);
    }
    handleMakeStoreOwner(id:string) {
    this.userService.MakeStoreOwner(id).subscribe({
      next:data=>{
        this.router.navigateByUrl('/storeowner');
      },
      error:err=>{
        console.log(err);
      }
    }
    )
    }
    


}
