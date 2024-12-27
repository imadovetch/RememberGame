import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BodyComponent} from "./Component/body/body.component";
import {CommandsComponent} from "./Component/commands/commands.component";
import {BoxColorComponent} from "./Component/box-color/box-color.component";
import {ScoreComponent} from "./Component/score/score.component"; // Root component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import the BrowserAnimationsModule

@NgModule({


  declarations: [
    AppComponent , BodyComponent , CommandsComponent , BoxColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScoreComponent,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
