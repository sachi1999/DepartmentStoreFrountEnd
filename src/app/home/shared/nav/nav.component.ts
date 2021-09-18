import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { eraseCookie } from 'src/helper/Cookie';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    eraseCookie("auth");
    this.router.navigate(['/account/login']);
    return;
  }

}
