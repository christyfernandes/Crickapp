import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule, Routes } from '@angular/router';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import {CRICKET} from './app.constants'
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/home.component';
import { PlayerComponent } from './modules/player/player.component';
import {HomeService} from './helpers/services/home.service';
import {PlayerFilterPipe } from './helpers/services/pipes';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { PlayerListComponent } from './modules/player-list/player-list.component';
import { NewMatchesComponent } from './modules/new-matches/new-matches.component';
import { MatchCalendarComponent } from './modules/match-calendar/match-calendar.component' ;



const appRoutes: Routes = [
  { path: CRICKET.ROUTES.ROOT, component: HomeComponent, pathMatch: 'full'},
  { path: CRICKET.ROUTES.PLAYER, component: PlayerComponent, pathMatch: 'full'},
  { path: CRICKET.ROUTES.ALL_PLAYERS, component: PlayerListComponent, pathMatch: 'full'},
  { path: CRICKET.ROUTES.NEW_MATCHES, component: NewMatchesComponent, pathMatch: 'full'},
  { path: CRICKET.ROUTES.MATCH_CALENDAR, component: MatchCalendarComponent, pathMatch: 'full'}

];

// const childRoutes:Routes = [
//   { path: CRICKET.ROUTES.PLAYER, component: PlayerComponent, pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    HeaderComponent,
    FooterComponent,
    PlayerListComponent,
    NewMatchesComponent,
    MatchCalendarComponent,
    PlayerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //RouterModule.forChild(childRoutes),
    NguiAutoCompleteModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
