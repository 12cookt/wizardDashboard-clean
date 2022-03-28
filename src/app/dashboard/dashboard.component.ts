import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiWizard } from "../models/apiWizard";
import { Observable } from "rxjs";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  wizard: ApiWizard = {
    "id": 1,
    "name": '',
    "profession": '',
    "str": 1,
    "dex": 1,
    "intel": 1,
    "wis": 1,
    "chari": 1,
    "spec": ''
  };


  constructor(private http: HttpClient, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getWizard(1).subscribe(
      (response) => {
        console.log('response received')
        this.wizard = response;
        console.log(this.wizard)
      },
      (error => {
        console.log('Request failed with an error')
      })
    )
  }

  getWizard(id: number): Observable<ApiWizard> {
    return this.http.get<ApiWizard>(`http://wizardsapi-env.eba-i9qbaatz.us-east-1.elasticbeanstalk.com/wizards/${id}`);
  }
}
