import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {
  NbProgressBarModule,
  NbCardModule,
  NbListModule,
  NbActionsModule,
  NbButtonModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbIconModule,
  NbMenuModule, } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbButtonModule,
    NbTabsetModule,
    NbRadioModule,
    NbSelectModule,
    NbIconModule,
    NbUserModule,
    NbProgressBarModule,
    FormsModule,
    HttpClientModule,
    NbMenuModule
  ]
})
export class DashboardModule { }
