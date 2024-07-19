import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/apis.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit{
  recipeData:any=[]

  constructor(private ar:ActivatedRoute,private service:ApiService){ }
  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      console.log(data.id);
      this.service.getAllRecepies().subscribe((res:any)=>{
        this.recipeData=res.recipes.find((i:any)=>i.id==data.id)
        console.log(this.recipeData); 
      })
    })
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 > 0 ? 1 : 0;
    const stars = [...Array(fullStars).fill('full'), ...Array(halfStars).fill('half')];
    return stars;
  }

}
