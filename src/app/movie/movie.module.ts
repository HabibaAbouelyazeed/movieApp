import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    WishlistComponent,
    MoviecardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
