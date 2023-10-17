import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { WishlistComponent } from './movie/wishlist/wishlist.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
  },
  {
    path: "details/:id",
    component: MovieDetailsComponent,
  },
  {
    path: "wishlist",
    component: WishlistComponent,
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
