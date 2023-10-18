import { Component } from '@angular/core';
import { MovieApiService } from '../../shared/service/movie-api.service';
import { Movie } from 'src/app/shared/interface/movie';
import { PaginationService } from '../../pagination.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  currentPage: number = 1;
  pageSize: number = 10;
  movies !:Movie[];
  
  constructor(private movieApiService: MovieApiService, 
    private paginationService: PaginationService,
    private httpClient: HttpClient) {}
  
  ngOnInit() {
    this.movieApiService.getMovieList().subscribe((data : any) => {
       this.movies= data.results ;
      console.log(this.movies); 
    });
    this.getData();
    this.fetchMovies();
  }
  getData(): void {
    this.paginationService.fetchData(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.movies = response.data;
      });
  }

 fetchMovies() {
    // const apiKey = 'a7e6cb75206ba0212cfd560483d20ab1';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&page=${this.currentPage}`;

    this.httpClient.get(url).subscribe((response: any) => {
      this.movies = response.results;
    });
}
onPageChange(page: number) {
  this.currentPage = page;
  this.fetchMovies();
}
}
