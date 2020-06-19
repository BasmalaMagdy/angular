
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  name:string;
  term:string;

  currentPage = 1;
  password:string = "SAas"      //private , public , protected

   pageNumbers : number[]=[];


  trendingAll = [];

  constructor(private _MovieService:MovieService) {

     for(let i=1 ; i<11 ; i++)
     {
       this.pageNumbers.push(i);
     }


     _MovieService.getTrendingAll(this.currentPage).subscribe( (data) => {             //subscribe make any chane accure in observable

         this.trendingAll = data.results;
        /* for (let i=0 ; i<data.results.length ; i++ )
         {
           data.results[i].poster_path = 'https://image.tmdb.org/t/p/w500/'+ data.results[i].poster_path;
           this.trendingAll.push( data.results[i]);
         }*/

     })




  }


  prev()
  {
    this.changeNumber(this.currentPage-1)
  }
  next()
  {
    this.changeNumber(this.currentPage+ 1)
  }


  changeNumber(ind)
  {
    this.currentPage = ind;
    this._MovieService.getTrendingAll(this.currentPage).subscribe( (data) => {             //subscribe make any chane accure in observable

      this.trendingAll = data.results;
    })
  }

  ngOnInit(): void {
  }

}



