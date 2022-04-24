import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
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
  NbMenuModule,
  NbSidebarModule, } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
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
    NbMenuModule,
    NbSidebarModule,
  ]
})
export class HeaderModule { }
