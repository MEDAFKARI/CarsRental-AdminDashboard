import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Core/Models/Brand';
import { BrandService } from 'src/app/Core/Services/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit{

public BrandForm!:FormGroup;
brandId!:number

constructor(private fb:FormBuilder,
            private router:ActivatedRoute,
            private brandService:BrandService,
            private rt: Router
){
  this.BrandForm = this.fb.group({
    id : [''],
    brandName: ['',Validators.required],
    brandLogo: ['',Validators.required]
  })
}

  ngOnInit(): void {
    this.brandId = this.router.snapshot.params['id'];
    this.brandService.getBrand(this.brandId).subscribe({
      next:data=>{
        console.log(data);
        this.BrandForm = this.fb.group({
          id : [data.id],
          brandName: [data.brandName,Validators.required],
          brandLogo: [data.brandLogo,Validators.required]
        })
      },
      error:err=>{
        console.log(err)
      }
    }) 
  }

HandleUpdateBrand() {
  if(this.BrandForm.valid){
    console.log(this.BrandForm.value);
    this.brandService.updateBrand(this.brandId,this.BrandForm.value).subscribe({
      next:data=>{
        this.rt.navigateByUrl(`/brands`);
      },
      error:err=>{
        console.log(err)
      }
    })
  }
  }
}
