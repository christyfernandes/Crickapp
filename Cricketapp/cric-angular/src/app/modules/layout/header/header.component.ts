import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRICKET } from '../../../app.constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  // gotoHome(){
  //   this.router.navigate([CRICKET.ROUTES.ROOT]);
  // }

  // gotoAllPlayers(){
  //   this.router.navigate([CRICKET.ROUTES.ALL_PLAYERS]);
  // }

}
