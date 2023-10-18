import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  api_key= environment.apiKey;
  constructor(private httpClient: HttpClient) { }
  getMovieList() {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}`; 
    return this.httpClient.get<Movie[]>(apiUrl);
  }


  getDetails (id: string) {
    return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}`)
  }

  
  getRecomendation (id: string) {
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.api_key}`)
  }
  // https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}
}

