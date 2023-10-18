import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviecardComponent,
    WatchListComponent,
    PaginationComponent,
    PaginationControlsComponent
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
  ],
})


export class MovieModule { }
