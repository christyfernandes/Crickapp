import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService} from '../../helpers/services/home.service';
// import { PipeTransform, Pipe } from '@angular/core';
// import { KeysPipe } from '../../helpers/services/pipes';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerStats:any;
  playerId:any;
  battingArray : any = [];
  bowlingArray :any = [];

  constructor(private homeservice: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((param: any) => {
        this.playerId = param['playerIdSelected'];
      });

    this.homeservice.getPlayerStatsById(this.playerId).subscribe((result) => {
      this.playerStats = result.response;
      if(result.response.data){
        if(result.response.data.batting.ODIs){
          let battingODIs = result.response.data.batting.ODIs;
          battingODIs.name = "ODIs";
          this.battingArray.push(battingODIs);
        }

        if(result.response.data.batting.T20Is){
          let battingT20Is = result.response.data.batting.T20Is;
          battingT20Is.name = "T20Is";
          this.battingArray.push(battingT20Is);
        }

        if(result.response.data.batting.firstClass){
          let battingfirstClass = result.response.data.batting.firstClass;
          battingfirstClass.name = "firstClass";
          this.battingArray.push(battingfirstClass);
        }
        if(result.response.data.batting.listA){
          let battinglistA = result.response.data.batting.listA;
          battinglistA.name = "listA";
          this.battingArray.push(battinglistA);
        }
        if(result.response.data.batting.tests){
          let battingtests = result.response.data.batting.tests;
          battingtests.name = "tests";
          this.battingArray.push(battingtests);
        }
        if(result.response.data.bowling.ODIs){
          let bowlingODIs = result.response.data.bowling.ODIs;
          bowlingODIs.name = "ODIs";
          this.bowlingArray.push(bowlingODIs);
        }
        if(result.response.data.bowling.T20Is){
          let bowlingT20Is = result.response.data.bowling.T20Is;
          bowlingT20Is.name = "T20Is";
          this.bowlingArray.push(bowlingT20Is);
        }
        if(result.response.data.bowling.firstClass){
          let bowlingfirstClass = result.response.data.bowling.firstClass;
          bowlingfirstClass.name = "firstClass";
          this.bowlingArray.push(bowlingfirstClass);
        }
        if(result.response.data.bowling.listA){
          let bowlinglistA = result.response.data.bowling.listA;
          bowlinglistA.name = "listA";
          this.bowlingArray.push(bowlinglistA);
        }
        if(result.response.data.bowling.tests){
          let bowlingtests = result.response.data.bowling.tests;
          bowlingtests.name = "tests";
          this.bowlingArray.push(bowlingtests);
        }      
      }
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }

}