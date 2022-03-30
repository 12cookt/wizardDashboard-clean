import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiWizard } from "../models/apiWizard";
import { Observable } from "rxjs";
import {LoginService} from "../services/login.service";
import {Exception} from "node-sass";


interface Metadata {
  image: string
}

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

  hasWizard: boolean = false;

  wizards$: Array<any> = [];

  imgUrl: Metadata = {
    image : ''
  };

  wizard: ApiWizard = {
    "id": 1,
    "intel": 1,
    "level": 1,
    "name": "",
    "profession": "",
    "region": "",
    "speed": 1,
    "spells": 1,
    "stamina": 1,
    "str": 1,
    "type": "light"
  };
  selectedIndex: any;

  constructor(private http: HttpClient, public loginService: LoginService) {
  }

  ngOnInit(): void {

      this.getUsersNFTs().subscribe(data => {
        if (data.result.length == 0)
          window.location.href = 'https://mint.wizardsofetheen.com/';
        else
          this.hasWizard = true;
        this.wizards$ = data.result;
        this.imgUrl = JSON.parse(this.wizards$[0].metadata);
        console.log(this.wizards$);
        this.getWizard(this.wizards$[0].token_id).subscribe(
          (response) => {
            console.log('response received')
            this.wizard = response;
          })
      });

  }

  getWizard(id: number): Observable<ApiWizard> {
    return this.http.get<ApiWizard>(`http://wizard2.us-east-1.elasticbeanstalk.com/wizards/${id}`);
  }

  getUsersNFTs(): Observable<any> {
      return this.http.get('https://deep-index.moralis.io/api/v2/' + this.loginService.showAccount + '/nft/0x5139cfEE9E8533d9f52be27BE183ec60c7222274?chain=eth&format=decimal', this.httpOptions);
  }

  loadSelectedWizard(id: string){
    console.log(id);
    let currentWizard: string[] = id.split(',');
    let tokenID: number = parseInt(currentWizard[0]);
    let index: number = parseInt(currentWizard[1]);
    this.getWizard(tokenID).subscribe(
      (response) => {
        console.log('response received')
        this.wizard = response;
        console.log(this.wizard)
      },
      (error => {
        console.log('Request failed with an error')
      })
    )
      this.imgUrl = JSON.parse(this.wizards$[index].metadata)

  }


}
