import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
<<<<<<< HEAD
    WishlistComponent,
    MoviecardComponent
=======
    WatchListComponent
>>>>>>> bceb48bda2b32a758a1abf72c494825da8f6adec
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
  ]
})
export class MovieModule { }
