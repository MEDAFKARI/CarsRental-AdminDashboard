import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/Core/Models/City';
import { CityService } from 'src/app/Core/Services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  Cities!:Array<City>
  constructor(private cityService:CityService,
              private router:Router
  ){}
  
  ngOnInit(): void {
    this.LoadCities();
  }


  LoadCities(){
      this.cityService.getAllCities().subscribe({
        next:data=>{
          console.log(data);
          this.Cities = data.content;
        },
        error:err=>{
          console.error(err)
        }
      })
  }


  handleDelete(cityId: number) {
    this.cityService.deleteCity(cityId).subscribe({
      next:data=>{
        console.log(data);
        this.LoadCities();
      },
      error:err=>{
        console.log(err);
      }
    })
  }


  handleEdit(cityId: number) {
    this.router.navigateByUrl(`/updateCity/${cityId}`);
  }





}
