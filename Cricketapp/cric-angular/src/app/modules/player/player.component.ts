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
      let battingODIs = result.response.data.batting.ODIs;
      battingODIs.name = "ODIs";
      let battingT20Is = result.response.data.batting.T20Is;
      battingT20Is.name = "T20Is";
      let battingfirstClass = result.response.data.batting.firstClass;
      battingfirstClass.name = "firstClass";
      let battinglistA = result.response.data.batting.listA;
      battinglistA.name = "listA";
      let battingtests = result.response.data.batting.tests;
      battingtests.name = "tests";
      this.battingArray.push(battingODIs);this.battingArray.push(battingT20Is);this.battingArray.push(battingfirstClass);this.battingArray.push(battinglistA);this.battingArray.push(battingtests);

      let bowlingODIs = result.response.data.bowling.ODIs;
      bowlingODIs.name = "ODIs";
      let bowlingT20Is = result.response.data.bowling.T20Is;
      bowlingT20Is.name = "T20Is";
      let bowlingfirstClass = result.response.data.bowling.firstClass;
      bowlingfirstClass.name = "firstClass";
      let bowlinglistA = result.response.data.bowling.listA;
      bowlinglistA.name = "listA";
      let bowlingtests = result.response.data.bowling.tests;
      bowlingtests.name = "tests";
      this.bowlingArray.push(bowlingODIs);this.bowlingArray.push(bowlingT20Is);this.bowlingArray.push(bowlingfirstClass);this.bowlingArray.push(bowlinglistA);this.bowlingArray.push(bowlingtests);

      console.log("bowling array",this.bowlingArray);
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }

}