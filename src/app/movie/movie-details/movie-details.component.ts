import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import { MovieApiService } from 'src/app/shared/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  details !: any;
  recomendation!:any;

  constructor(private movieApiService: MovieApiService,
    private activatedRoute: ActivatedRoute,
    ) { }
 
  ngOnInit() {
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.params);
    this.movieApiService.getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) =>this.details=data );

      this.movieApiService.getRecomendation(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) =>this.recomendation=data.results );
      
      
  }
//this.details=data
//console.log( data)
// console.log( data.results)


// this.recomendation

genres = [{ "id": 28, "name": "Action" },
{ "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" },
{ "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, 
{ "id": 10751, "name": "Family" },
{ "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, 
{ "id": 10402, "name": "Music" },
{ "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, 
{ "id": 878, "name": "Science Fiction" },
{ "id": 10770, "name": "TV Movie" },
{ "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]
funfun(id:number){

}
}


