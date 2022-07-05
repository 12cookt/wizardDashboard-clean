import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiWizard } from "../models/apiWizard";
import { Observable } from "rxjs";
import {LoginService} from "../services/login.service";


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

  hasWizard: boolean = false; //hardcoded to true to bypass redirect for dev purposes

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
        //this.imgUrl = JSON.parse(this.wizards$[0].metadata);
        //console.log(this.imgUrl)
        this.imgUrl = JSON.parse(this.getImage(this.wizards$[0].token_id))
        this.getWizard(this.wizards$[0].token_id).subscribe(
          (response) => {
            this.wizard = response;
          })
      });
  }

  getWizard(id: number): Observable<ApiWizard> {
    return this.http.get<ApiWizard>(`http://wizard2.us-east-1.elasticbeanstalk.com/wizards/${id}`);
  }

  getUsersNFTs(): Observable<any> {
      return this.http.get('https://deep-index.moralis.io/api/v2/' + this.loginService.userAccount + '/nft/0x5139cfEE9E8533d9f52be27BE183ec60c7222274?chain=eth&format=decimal', this.httpOptions);
  }

  loadSelectedWizard(id: string){
    let currentWizard: string[] = id.split(',');
    let tokenID: number = parseInt(currentWizard[0]);
    let index: number = parseInt(currentWizard[1]);

    this.getWizard(tokenID).subscribe(
      (response) => {
        this.wizard = response;
      },
      (error => {
        console.log('Request failed with an error')
      }),

    )
    console.log("before image")
      this.getImage(tokenID.toString())
    console.log("after image")
      this.imgUrl = JSON.parse(this.wizards$[index].metadata)
  }

  getImage(tokenId: string): string{
    const options = {method: 'GET'};
    let image: string = '';

    fetch('https://api.opensea.io/api/v1/asset/0x5139cfEE9E8533d9f52be27BE183ec60c7222274/' + tokenId + '/?include_orders=false', options)
      .then(response => response.json())
      .then(response => {
        image = response.image_url.toString();
        return image;
      })
      .catch(err => console.error(err))
      .then();

    return image;
  }
}
