import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor(private http: HttpClient) {}

  fetchData(page: number, pageSize: number): Observable<any> {
    const api_key= environment.apiKey;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page${page}`;
    
    return this.http.get<any>(url);
  }
}



