import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[] , term:string ): any {


    if(term == undefined)
    {
      return movies;
    }
    return movies.filter(function(movies){
      return movies?.title?.toLowerCase().includes(term.toLowerCase());
    })



    /*if(!term){return movies;}
         return movies.filter(movie=>{
           if (movie){
             return movie?.Title?.toLowerCase().includes(term.toLowerCase());

           }

           return false;
         })*/







  }

}
