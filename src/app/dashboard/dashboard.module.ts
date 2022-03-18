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
  NbIconModule, } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class DashboardModule { }
