import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CRICKET } from '../../app.constants';
import {HomeService} from '../../helpers/services/home.service';

@Component({
  selector: 'app-new-matches',
  templateUrl: './new-matches.component.html',
  styleUrls: ['./new-matches.component.css'],
  providers: [HomeService]
})
export class NewMatchesComponent implements OnInit {
  newMatches:any;
  constructor(private homeservice: HomeService) { }

  ngOnInit() {
    //get new matches
    this.homeservice.getNewMaches().subscribe((resp)=>{
      console.log("new match",resp);
      this.newMatches = resp.response.matches;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }

}
