import { Component } from '@angular/core';
import {faStar, faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons'
import { Movie } from 'src/app/shared/interface/movie';
import { WatchlistService } from 'src/app/shared/service/watchlist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  faStar = faStar;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  environment = environment;
  watchlist !: Movie[]

  constructor(private watchListService: WatchlistService){}

  ngOnInit(){
    this.watchListService.getWatchlist().subscribe(
      (data) => this.watchlist = data,
      (error) => console.log(error)
    )
  }

  removeMovie(movie: Movie){
    this.watchListService.toggleWatchlist(movie, this.watchlist)
  }
}
