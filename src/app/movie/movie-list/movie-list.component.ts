import { Component } from '@angular/core';
import { MovieApiService } from '../../shared/service/movie-api.service';
import { Movie } from 'src/app/shared/interface/movie';
import { PaginationService } from '../../pagination.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

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
  filteredMovies!: Movie[];
  searchResult: string = '';

  constructor(
    private movieApiService: MovieApiService,
    private paginationService: PaginationService,
    private httpClient: HttpClient,
    private router: Router,


  ) {}

  ngOnInit() {
    this.movieApiService.getMovieList().subscribe((data: any) => {
      this.movies = data.results;
      this.filteredMovies = data.results;
    });
    this.getData();
    this.fetchMovies();
  }
  getData(): void {
    this.paginationService
      .fetchData(this.currentPage, this.pageSize)
      .subscribe((response) => {
        this.movies = response.data;
        this.filteredMovies = response.data;
      });
  }

  fetchMovies() {
   
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&page=${this.currentPage}`;

    this.httpClient.get(url).subscribe((response: any) => {
      this.movies = response.results;
      this.filteredMovies = response.results;
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchMovies();
  }

  search() {
      this.router.navigate(['searchDisplay',this.inputValue]);
     
    
  //   if (this.inputValue.trim()) {
  //     this.searchResult = this.inputValue;
  //     let filter = this.movies.filter((card: Movie) =>
  //       card.title.toLowerCase().includes(this.inputValue.toLowerCase())
  //     );
  //     this.filteredMovies = filter;
  //     this.inputValue = '';
  //   } else {
  //     this.filteredMovies = this.movies;
  //     this.inputValue = '';
  //     this.searchResult = '';
  //   }
  }
}
