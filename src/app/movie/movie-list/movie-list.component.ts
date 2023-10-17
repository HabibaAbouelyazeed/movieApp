import { Component } from '@angular/core';
import { MovieApiService } from '../../shared/service/movie-api.service';
import { Movie } from 'src/app/shared/interface/movie';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  
  constructor(private movieApiService: MovieApiService) {}
  movies !:Movie[];
  inputValue!: string;
  filtered: any = this.movies
  ngOnInit() {
    this.movieApiService.getMovieList().subscribe((data : any) => {
       this.movies= data.results ;
    });
  }

  search() {
    if (this.inputValue) {
      this.filtered = this.movies;
      let filter = this.filtered.filter((card: any) =>
      card.title.toLowerCase().includes(this.inputValue.toLowerCase()));
      this.movies = filter;
      this.inputValue = "";
    }else{
      this.movies = this.filtered;
      this.inputValue = "";
    }
     
  }
}