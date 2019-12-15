import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GameControl }   from './gamecontrol';
import { Even }   from './even';
import { Odd }   from './odd';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ GameControl, Even, Odd ],
    bootstrap:    [ GameControl ]
})
export class AppModule { }