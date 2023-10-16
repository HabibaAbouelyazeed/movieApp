import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class MovieModule { }
