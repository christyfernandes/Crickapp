import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CRICKET } from '../../app.constants';
import {HomeService} from '../../helpers/services/home.service';

@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.css'],
  providers: [HomeService]
})
export class MatchCalendarComponent implements OnInit {
  matchCalendar:any;
  constructor(private homeservice: HomeService) { }

  ngOnInit() {
    //get match calendar
    this.homeservice.getMatchCalendar().subscribe((resp)=>{
      console.log("calendar",resp);
      this.matchCalendar = resp.response.data;
    },
    (err)=>{
      console.log("falied to get response from the srever !");
    })
  }

}
