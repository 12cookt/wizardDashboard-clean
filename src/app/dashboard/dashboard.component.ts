import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Wizard} from "../models/wizard";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  get currentWizard(): Wizard {
    return this._currentWizard;
  }

  set currentWizard(value: Wizard) {
    this._currentWizard = value;
  }

  private _currentWizard!: Wizard;
  // wizardType: any;
  // level: number;
  // strength: number;
  // speed: number;
  // stamina: number;
  // intelligence: number;
  // spells: number;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getWizard(1);
  }

  getWizard(wizardId: number): void {
    this.http.get<any>(`http://wizardsapi-env.eba-i9qbaatz.us-east-1.elasticbeanstalk.com/wizards/${wizardId}`).subscribe(data=>{
      console.log(data);
      let wiz: any = JSON.parse(data);
      this._currentWizard wiz.map(() => {
        });
      });
      console.log(this._currentWizard);
    }

}
