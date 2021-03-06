import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/sign-in/sign-in';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = SignInPage;
  pages: Array<{title: string, icon: string, component?: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Movie List', icon: 'list-box', component: MovieListPage},
      {title: 'Account', icon: 'person'},
      {title: 'Log Out',  icon: 'exit', component: SignInPage}
    ]
  }

  openPage(page) {
    if (page.component) {
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  }
}

