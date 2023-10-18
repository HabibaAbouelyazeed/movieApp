import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WatchListComponent } from '../movie/watch-list/watch-list.component';
import { WatchlistService } from '../shared/service/watchlist.service';
import { Movie } from '../shared/interface/movie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHeart = faHeart;
  watchList !: Movie[];

  constructor(private watchListService: WatchlistService){}

  ngOnInit(){
    this.watchListService.getWatchlist().subscribe(
      (data) => this.watchList = data,
      (error) => console.log(error)
    )
  }
}
