import { Component } from '@angular/core';
import { MovieApiService } from '../../shared/service/movie-api.service';
import { Movie } from 'src/app/shared/interface/movie';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
<<<<<<< HEAD
export class MovieListComponent {
=======
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
>>>>>>> 3e1ccc5cf43a7464dbc4084194ca8077cba530d8
