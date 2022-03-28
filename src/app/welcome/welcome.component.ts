import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  return: string = '';


  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
