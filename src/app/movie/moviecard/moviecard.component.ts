import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { WatchlistService } from 'src/app/shared/service/watchlist.service';
import { Movie } from 'src/app/shared/interface/movie';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent implements OnInit {
  faHeart = faHeart;
  environment = environment;
  watchlist!: Movie[];
  @Input() movie: any;

  constructor(
    private router: Router,
    private watchlistService: WatchlistService
  ) {}

  ngOnInit(): void {
    this.watchlistService.getWatchlist().subscribe(
      (data) => (this.watchlist = data),
      (error) => console.log(error)
    );

    if(this.watchlist.filter((elem) => elem.id === this.movie.id).length > 0) {
      this.movie.watchlist = true;
    }else{
      this.movie.watchlist = false;
    }
  }

  sendIdToDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  toggleWatchList() {
    this.watchlistService.toggleWatchlist(this.movie, this.watchlist);
  }
}
