import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient: HttpClient) { }
  getMovieList() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=a7e6cb75206ba0212cfd560483d20ab1'; 
    return this.httpClient.get<Movie[]>(apiUrl);
  }
}

