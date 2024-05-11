import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/Core/Services/city.service';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {

CityForm!: FormGroup;
cityId!:number;

constructor(private fb:FormBuilder ,
            private cityService:CityService,
            private router:Router,
            private route:ActivatedRoute
){
  this.CityForm = this.fb.group({
    cityName : ['',Validators.required]
  })
}


ngOnInit(): void {
  this.cityId = this.route.snapshot.params['id']
  this.cityService.getCity(this.cityId).subscribe({
    next:data=>{
      this.CityForm = this.fb.group({
        cityName : [data.cityName,Validators.required]
      })
    },
    error:err=>{
      console.log(err)
    }
  })
}


HandleUpdateCity() {
  if(this.CityForm.valid){
    this.cityService.updateCity(this.cityId,this.CityForm.value).subscribe({
      next:data=>{
        console.log(data);
        this.router.navigateByUrl(`/city`);
      },
      error:err=>{
        console.log(err);
      }
    })
  };
}

}
