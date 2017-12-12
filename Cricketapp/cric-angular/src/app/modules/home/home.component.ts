import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CRICKET } from '../../app.constants';
import {HomeService} from '../../helpers/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  allPlayers:any = [];
  playerStats:any;
  newMatches:any;
  oldMatches:any;
  matchCalendar:any;

  constructor(private homeservice: HomeService, private route: ActivatedRoute, private router: Router) { 
  
  }
  

  ngOnInit() {
    //get all players 
    this.homeservice.getAllPLayers().subscribe((resp)=>{
      console.log(resp.players);
      this.allPlayers = resp.players;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })

    //get new matches
    this.homeservice.getNewMaches().subscribe((resp)=>{
      console.log("new match",resp);
      this.newMatches = resp.response.matches;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })

    //get old matches
    this.homeservice.getOldMaches().subscribe((resp)=>{
      console.log("old match",resp);
      this.oldMatches = resp.response.data;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })

    //get match calendar
    this.homeservice.getMatchCalendar().subscribe((resp)=>{
      console.log("calendar",resp);
      this.matchCalendar = resp.response.data;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }

  //This method captures change in autocomplete
  valueChanged(data){
    this.router.navigate([CRICKET.ROUTES.PLAYER], { queryParams: { playerIdSelected: data.id  }
    });
  }

  // gotoNewMatches(){
  //   this.router.navigate([CRICKET.ROUTES.NEW_MATCHES]);
  // }

  // gotoMatchCalendar(){
  //    this.router.navigate([CRICKET.ROUTES.MATCH_CALENDAR]);
  // }
}
