import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/Core/Services/brand.service';

@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.css']
})
export class NewBrandComponent implements OnInit{


  public BrandForm!:FormGroup;

  constructor(private fb:FormBuilder,
      private brandService:BrandService,
      private router:Router
  ){}

  ngOnInit(): void {
    this.BrandForm = this.fb.group({
      brandName: ['',Validators.required],
      brandLogo: ['',Validators.required]
    })
  }


  HandleAddBrand() {
    if(this.BrandForm.valid){
        this.brandService.addBrand(this.BrandForm.value).subscribe({
          next:value=> {
            console.log(value);
            this.router.navigateByUrl(`/brands`)
          },
          error(err) {
            console.log(err)
          },
        })
    }

  }





}
