import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { }


=======
  constructor(private httpClient: HttpClient) { }
  getMovieList() {
    const api_key= environment.apiKey;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`; 
    return this.httpClient.get<Movie[]>(apiUrl);
  }


  getDetails (id: string) {
    return this.httpClient.get<Movie[]>(`https://api.themoviedb.org/3/movie/${id}?api_key=a7e6cb75206ba0212cfd560483d20ab1`)
  }

  
  getRecomendation (id: string) {
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a7e6cb75206ba0212cfd560483d20ab1`)
  }
  // https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}
>>>>>>> 3e1ccc5cf43a7464dbc4084194ca8077cba530d8

}

