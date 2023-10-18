import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieApiService } from 'src/app/shared/service/movie-api.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css'],
})
export class SearchDisplayComponent {
  searchResult!: Movie[];
  searchDisplayValue !: string;
  showingValue !: string;

  constructor(
    private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.movieApiService
      .getSearch(this.activatedRoute.snapshot.params['MovieName'])
      .subscribe(
        (data) => (this.searchResult = data.results),
        (error) => console.log(error)
      );
      this.showingValue = this.activatedRoute.snapshot.params['MovieName'];
  }

  searchToValue(value: string) {
    if (value.trim()) {
      this.movieApiService
      .getSearch(value.trim()).subscribe(
        (data) => (this.searchResult = data.results),
        (error) => console.log(error)
      );
      this.showingValue = value;
      this.searchDisplayValue = '';
    }
  }
}
