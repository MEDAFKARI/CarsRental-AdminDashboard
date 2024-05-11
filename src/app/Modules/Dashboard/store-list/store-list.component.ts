import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/Core/Services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  stores:any =[]

  constructor(private storeService:StoreService){

  }

  ngOnInit(): void {
    this.loadStores();
  }


  loadStores(){
      this.storeService.getAllStores().subscribe({
        next:data=>{
          console.log(data);
            this.stores = data.content
        },
        error:err=>{
          console.log(err);
        }
      })
  }

  handleStoreInformation(storeId: any) {
    console.log(storeId);
  }





}
