import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  testCall: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://wizardsapi-env.eba-i9qbaatz.us-east-1.elasticbeanstalk.com/wizards/1').subscribe(data=>{
      this.testCall = data.id;
      console.log(this.testCall);
    })
  }

}
