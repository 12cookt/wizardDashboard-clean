import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiWizard } from "../models/apiWizard";
import { Observable } from "rxjs";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  httpOptions = {
  headers: new HttpHeaders({
    'X-API-Key': 'wKPDhl8eebesrt7pwH9g2cSC429YuovOiXx4j5XyZGY99HcqB4r8MRFnCG0AngGq'
  })
};


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

  testNFTs: any;


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
    console.log(this.testMoralis());
  }

  getWizard(id: number): Observable<ApiWizard> {
    return this.http.get<ApiWizard>(`http://wizardsapi-env.eba-i9qbaatz.us-east-1.elasticbeanstalk.com/wizards/${id}`);
  }

  testMoralis() {
    return new Promise(resolve => {
      this.http.get('https://deep-index.moralis.io/api/v2/0xC52A04bE765FaBD6Da4693a77F189D1b0F67825b/nft?chain=eth&format=decimal', this.httpOptions).subscribe(data => {
        resolve(data);
      },   err => {
        console.log(err);
      });
    });
  }
}
