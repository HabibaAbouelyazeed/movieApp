import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieApiService } from 'src/app/shared/service/movie-api.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WatchlistService } from 'src/app/shared/service/watchlist.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  faStar = faStar;
  details!: Movie;
  recommendations!: Movie[];
  faHeart = faHeart;
  watchlist!: Movie[];

  constructor(
    private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute,
    private watchListService: WatchlistService
  ) {}

  ngOnInit() {
    this.movieApiService
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (data) => (this.details = data),
        (error) => console.log(error)
      );

    this.movieApiService
      .getRecomendation(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (data) => (this.recommendations = data.results),
        (error) => console.log(error)
      );

    this.watchListService.getWatchlist().subscribe(
      (data) => (this.watchlist = data),
      (error) => console.log(error)
    );

    // if (this.watchlist.filter((elem) => elem.id === this.details.id).length > 0){
    //   this.details.watchlist = true;
    // } else {
    //   this.details.watchlist = false;
    // }
  }

  toggleWatchList(movie: Movie) {
    this.watchListService.toggleWatchlist(movie, this.watchlist);
  }

}
