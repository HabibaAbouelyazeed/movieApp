import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { WatchListComponent } from './movie/watch-list/watch-list.component';

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
  },
  {
    path: "details",
    component: MovieDetailsComponent,
  },
  {
    path: "watchlist",
    component: WatchListComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
