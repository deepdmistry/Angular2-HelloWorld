import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {MapsComponent} from './maps/maps.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, AppRoutingModule, HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent, HeroDetailComponent, MessagesComponent, HeroSearchComponent, MapsComponent
  ], providers: [HeroService, MessageService], bootstrap: [AppComponent]
})
export class AppModule {
}
