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

    this.getUsersNFTs().subscribe(data => console.log(data.result));

  }

  getWizard(id: number): Observable<ApiWizard> {
    return this.http.get<ApiWizard>(`http://wizardsapi-env.eba-i9qbaatz.us-east-1.elasticbeanstalk.com/wizards/${id}`);
  }

  getUsersNFTs(): Observable<any> {
      return this.http.get('https://deep-index.moralis.io/api/v2/' + this.loginService.showAccount + '/nft/0x5139cfEE9E8533d9f52be27BE183ec60c7222274?chain=eth&format=decimal', this.httpOptions);
  }
}
