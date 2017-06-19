import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {CRICKET} from '../../app.constants' 

@Injectable()
export class HomeService {
    appPlayers: any = [];
    constructor(private http: Http) {
    }

    public getAllPLayers(): any{
        return this.http.get(CRICKET.BASE + CRICKET.API.GET_ALL_PLAYERS)
            .map((res:any) => 
            {
                console.log(res);
                return  res.json();
            });
    }

     public getPlayerStatsById(pid): Observable<any>{
         return this.http.post(CRICKET.BASE + CRICKET.API.GET_PLAYER_STATS_BY_ID, {"pid":pid})
            .map((res:any) => 
            {
                return  res.json();
            });
     };

     public getNewMaches(): Observable<any>{
         return this.http.get(CRICKET.BASE + CRICKET.API.GET_NEW_MATCHES )
         .map((res:any)=>{
             return res.json();
         });
     }

     public getOldMaches(): Observable<any>{
          return this.http.get(CRICKET.BASE + CRICKET.API.GET_OLD_MATCHES )
          .map((res:any)=>{
             return res.json();
         });
     }

     public getMatchScoreById(matchId): Observable<any>{
         return this.http.post(CRICKET.BASE + CRICKET.API.GET_MATCH_SCORE_BY_ID, {"mid":matchId})
         .map((res:any)=>{
             return res.json();
         });
     }

     public getMatchCalendar(): Observable<any>{
          return this.http.get(CRICKET.BASE + CRICKET.API.GET_MATCH_CALENDAR)
          .map((res:any)=>{
             return res.json();
         });
     }

}