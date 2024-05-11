import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Core/Models/brand';
import { BrandService } from 'src/app/Core/Services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands:Array<Brand>=[];

  constructor(private brandService:BrandService){}

  ngOnInit(): void {
    this.LoadBrand();
  }

  LoadBrand(){
    this.brandService.getAllBrands().subscribe({
      next:data=> {
        console.log(data);
          this.brands = data.content;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
    

}
