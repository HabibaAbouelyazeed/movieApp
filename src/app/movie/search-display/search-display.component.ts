import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieApiService } from 'src/app/shared/service/movie-api.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent {
  searchValue!: Movie[];
  searchdisplayvalue!: string;
  anotherValue!: Movie[];

  constructor(
    private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.movieApiService
      .getSearch(this.activatedRoute.snapshot.params['MovieName'])
      .subscribe(
        (data) => (this.searchValue = data.results),
        (error) => console.log(error)
      );
  }
  searchToValue() {
    if (this.searchdisplayvalue.trim()) {
      this.movieApiService
        .getSearch(this.activatedRoute.snapshot.params['searchdisplayvalue'])
        .subscribe(
          (data) => (this.anotherValue = data.results,
            this.searchValue = this.anotherValue),
          (error) => console.log(error)
        );
    }
  }
}



