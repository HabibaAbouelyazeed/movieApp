import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private httpClient: HttpClient) { }
  getMovieList() {
    const api_key= environment.apiKey;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`; 
    return this.httpClient.get<Movie[]>(apiUrl);
  }
}

