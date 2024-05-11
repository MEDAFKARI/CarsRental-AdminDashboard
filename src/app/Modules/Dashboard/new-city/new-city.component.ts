import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/Core/Services/city.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {

public CityForm!:FormGroup

constructor(private fb:FormBuilder,
            private cityService:CityService,
            private router:Router
 ){}

  ngOnInit(): void {
      this.CityForm = this.fb.group({
        cityName : ['',Validators.required]
      })
  }


  HandleAddCity() {
    if(this.CityForm.valid){
        this.cityService.addCity(this.CityForm.value).subscribe(
          {
            next:data=>{
              console.log(data);
              this.router.navigateByUrl(`/city`);
            },
            error:err=>{
              console.log(err)
            }
          }
        )
    }
    }



}
