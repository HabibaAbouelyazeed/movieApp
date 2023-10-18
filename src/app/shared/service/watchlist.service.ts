import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlist = new BehaviorSubject<Movie[]>([]);

  constructor() {}

  getWatchlist() {
    return this.watchlist.asObservable();
  }

  setWatchlist(newWatchlist: Movie[]){
    this.watchlist.next(newWatchlist);
  }

  toggleWatchlist(movieItem: Movie, newWatchlist: Movie[]) {
    //movie exist in wishlist?
    if (newWatchlist.filter((elem) => elem.id === movieItem.id).length > 0) {
      movieItem.watchlist = false;
      newWatchlist = this.removeMovie(movieItem, newWatchlist);
    } else {
      movieItem.watchlist = true;
      newWatchlist.push(movieItem);
    }
    this.setWatchlist(newWatchlist);
  }

  removeMovie(movieItem: Movie, newWishlist: Movie[]) {
    return newWishlist.filter((elem) => {
      return elem.id !== movieItem.id;
    });    
  }
}
