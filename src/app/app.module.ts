import { ReviewsModule } from './reviews/reviews.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { MovesComponent } from './moves/moves.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestService } from './test.service';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { WatchsPipe } from './watchs.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TvComponent,
    MovesComponent,
    MoviesComponent,
    PeopleComponent,
    ContactsComponent,
    WatchsPipe,
    SeemorePipe,
    SearchPipe,
    MoviedetailsComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
