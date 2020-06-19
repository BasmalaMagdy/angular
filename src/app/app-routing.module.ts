import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent},
  {path:'about:' , component:AboutComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'contacts' , component:ContactsComponent},
  {path:'people' , component:PeopleComponent},

   //بعد ال # اسم الكلاس بتاع الموديول
  {path:'reviews' , loadChildren:'./reviews/reviews.module#ReviewsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
