import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/interface/movie';
import { PaginationService } from '../../pagination.service';
import { MovieApiService } from '../../shared/service/movie-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  currentPage: number = 1;
  pageSize: number = 10;
  movies!: Movie[];
  inputValue!: string;

  constructor(
    private movieApiService: MovieApiService,
    private paginationService: PaginationService,
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.movieApiService.getMovieList().subscribe(
      (data: any) => this.movies = data.results,
      (error) => console.log(error)
      );
    this.getData();
    this.fetchMovies();
  }
  getData(): void {
    this.paginationService
      .fetchData(this.currentPage, this.pageSize)
      .subscribe(
        (response) => this.movies = response.data,
        (error) => console.log(error)
        );
  }

  fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&page=${this.currentPage}`;

    this.httpClient.get(url).subscribe(
      (response: any) => this.movies = response.results,
      (error) => console.log(error)
      );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchMovies();
  }

  search() {
      this.router.navigate(['searchDisplay',this.inputValue]);
  }
}
