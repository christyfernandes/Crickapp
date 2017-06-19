import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CRICKET } from '../../app.constants';
import {HomeService} from '../../helpers/services/home.service';
import {PlayerFilterPipe } from '../../helpers/services/pipes';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [HomeService],
})
export class PlayerListComponent implements OnInit {
  allPlayers:any = [];

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
  }


  //This method captures change in autocomplete
  goToPLayerDetails(pid){
    console.log(pid);
    this.router.navigate([CRICKET.ROUTES.PLAYER], { queryParams: { playerIdSelected: pid  }
    });
  }



}
