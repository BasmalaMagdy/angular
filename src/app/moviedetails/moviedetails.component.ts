import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from'@angular/router';      //activatedroute hold the activiate link whice after press on filmz
import{MovieService} from '../movie.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})

export class MoviedetailsComponent implements OnInit {

  movieDetails:any ={};
  ind;
  constructor(_ActivatedRoute:ActivatedRoute ,public _MovieService:MovieService)
  {
   this.ind = _ActivatedRoute.snapshot.paramMap.get("id");

   }

  ngOnInit(): void {

    this._MovieService.getTrendingAll(1).subscribe((data)=>{

      this.movieDetails = data.results[this.ind];

     })
  }

}
