import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviecardComponent,
    WatchListComponent
  ],
  imports: [
<<<<<<< HEAD
    CommonModule
  ],

=======
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
>>>>>>> 3e1ccc5cf43a7464dbc4084194ca8077cba530d8
})


export class MovieModule { }
