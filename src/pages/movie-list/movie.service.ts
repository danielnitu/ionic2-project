import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class MovieService {
  private movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4c58e824f4479783760326a036364fd5&language=en-US&page=1'

  constructor (private http: Http) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get(this.movieUrl)
      .map(this.handleResponse);
  }

  handleResponse(res: Response) {
    let body = res.json();
    let results = body.results;

    // Format the link for movie poster
    results.map((result) => {
      return result['poster_path'] = 'https://image.tmdb.org/t/p/w500' + result['poster_path']
    })

    // Limit to 10 results as API accepts 40 hits / 10 seconds
    results.length = 3;
    return results;
  }
}