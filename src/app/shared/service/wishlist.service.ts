import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlist = new BehaviorSubject<Movie[]>([]);

  constructor() {}

  getWishlist() {
    return this.wishlist.asObservable();
  }

  toggleWishlist(movieItem: Movie, newWishlist: Movie[]) {
    //movie exist in wishlist?
    if ( newWishlist.filter((elem) => {elem.id === movieItem.id; }).length > 0) {
      movieItem.wishlist = false;
      newWishlist = this.removeMovie(movieItem, newWishlist);
    } else {
      movieItem.wishlist = true;
      newWishlist.push(movieItem);
    }
    this.wishlist.next(newWishlist);
  }

  removeMovie(movieItem: Movie, newWishlist: Movie[]) {
    return newWishlist.filter((elem) => {
      elem.id != movieItem.id;
    });
  }
}
