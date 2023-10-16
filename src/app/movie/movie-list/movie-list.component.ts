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
  ngOnInit() {
    this.movieApiService.getMovieList().subscribe((data : any) => {
       this.movies= data.results ;
      console.log(this.movies); 
    });
  }
}
