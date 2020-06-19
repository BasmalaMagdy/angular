import { MovesComponent } from './moves/moves.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
  design patterns

  MVC
  model =>   ay7aga leha 3laka beldata
  view =>    html, css
  controller =>  function ely btrbot el view bel model



  mvvm
  model =>   ay7aga leha 3laka beldata
  view =>    html, css
  viewmodel => data binding

  <Button>


*/
//observable => yomken edrakoo


export class MovieService {

  constructor(private _HttpClient:HttpClient) {



  }


getTrendingAll(pageNumber): Observable<any>
{
   return this. _HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=66ffb4aa99bb8f1b18ae0930c5156b62&page="+pageNumber)
}

getTrendingMovie(): Observable<any>
{
   return this. _HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=66ffb4aa99bb8f1b18ae0930c5156b62")
}

getTrendingTv(): Observable<any>
{
   return this. _HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=66ffb4aa99bb8f1b18ae0930c5156b62")
}

getTrendingPeople(): Observable<any>
{
   return this. _HttpClient.get("https://api.themoviedb.org/3/trending/people/week?api_key=66ffb4aa99bb8f1b18ae0930c5156b62")
}




}
