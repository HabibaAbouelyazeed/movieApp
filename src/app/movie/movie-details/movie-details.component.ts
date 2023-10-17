import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieApiService } from 'src/app/shared/service/movie-api.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WatchlistService } from 'src/app/shared/service/watchlist.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  details!: any;
  recomendation!: any;
  faHeart = faHeart;
  watchlist !: Movie[];

  constructor(
    private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute,
    private watchListService: WatchlistService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.params);
    this.movieApiService.getDetails(this.activatedRoute.snapshot.params['id']).subscribe((data) => (this.details = data));

      this.movieApiService.getRecomendation(this.activatedRoute.snapshot.params['id']).subscribe((data) =>this.recomendation=data.results );
      
      this.watchListService.getWatchlist().subscribe(
        (data) => this.watchlist = data,
        (error) => console.log(error)
      );
  }
  toggleWatchList(movie: Movie) {
    this.watchListService.toggleWatchlist(movie, this.watchlist)
  }
}


