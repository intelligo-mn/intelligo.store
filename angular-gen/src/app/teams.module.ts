import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Teams01Component } from './teams/teams-01.component';
import { Teams02Component } from './teams/teams-02.component';
import { Teams03Component } from './teams/teams-03.component';
import { Teams04Component } from './teams/teams-04.component';
import { Teams05Component } from './teams/teams-05.component';
import { Teams06Component } from './teams/teams-06.component';
import { Teams07Component } from './teams/teams-07.component';
import { Teams08Component } from './teams/teams-08.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Teams01Component,
    Teams02Component,
    Teams03Component,
    Teams04Component,
    Teams05Component,
    Teams06Component,
    Teams07Component,
    Teams08Component
  ],
  exports: [
    Teams01Component,
    Teams02Component,
    Teams03Component,
    Teams04Component,
    Teams05Component,
    Teams06Component,
    Teams07Component,
    Teams08Component
  ]
})
export class TeamsModule { }