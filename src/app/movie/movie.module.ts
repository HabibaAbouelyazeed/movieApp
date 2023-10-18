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
import { RateToPercentPipe } from '../shared/pipe/rate-to-percent.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MoviecardComponent,
    WatchListComponent,
    PaginationComponent,
    SearchDisplayComponent,
    RateToPercentPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 25,
      outerStrokeWidth: 5,
      innerStrokeWidth: 1,
      outerStrokeColor: "white",
      innerStrokeColor: "black",
      animation: true,
      animationDuration: 300,
      showSubtitle: false,
      backgroundColor: 'black',
      unitsColor: 'white',
      titleColor: 'white'
    })
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
