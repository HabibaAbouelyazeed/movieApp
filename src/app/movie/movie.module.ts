import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchDisplayComponent } from './search-display/search-display.component';




@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviecardComponent,
    WatchListComponent,
    PaginationComponent,
    SearchDisplayComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviecardComponent,
    WatchListComponent,
    SearchDisplayComponent,

  ],
})


export class MovieModule { }
