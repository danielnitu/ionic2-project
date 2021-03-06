import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Movie } from '../movie-list/movie';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movie: Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

}
