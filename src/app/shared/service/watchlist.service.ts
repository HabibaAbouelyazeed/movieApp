import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlist = new BehaviorSubject<Movie[]>([]);

  constructor() {}

  getWishlist() {
    return this.watchlist.asObservable();
  }
  getWatchlist(): Movie[] {
    return this.watchlist.getValue();
  }

  toggleWishlist(movieItem: Movie, newWatchlist: Movie[]) {
    //movie exist in wishlist?
    if ( newWatchlist.filter((elem) => {elem.id === movieItem.id; }).length > 0) {
      movieItem.wishlist = false;
      newWatchlist = this.removeMovie(movieItem, newWatchlist);
    } else {
      movieItem.wishlist = true;
      newWatchlist.push(movieItem);
    }
    this.watchlist.next(newWatchlist);
  }

  removeMovie(movieItem: Movie, newWishlist: Movie[]) {
    return newWishlist.filter((elem) => {
      elem.id != movieItem.id;
    });
  }
}
