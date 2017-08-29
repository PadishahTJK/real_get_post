import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//Importiturm sam  AppComponent
import {AppComponent} from './app.component';
import {ChildComponent}  from './child.component';
import { InteractionBetweenComponent } from './interaction.between.component';

//HTTP request
import {HttpModule}  from "@angular/http";

import {HttpComponent} from "./http.component";
import {ObsComponent} from "./rx/obs.component";
import {TestComponent} from "./test/test.component";
import {OshibkaComponent} from "./errorH/oshibka.component";
import {ComplexComponent} from "./complex.request/complex.component";

import {PostComponent} from "./post/post.component";
import {SendingParamComponent} from "./sendingparameters/sending.param.component";

import {PosComponent} from "./pos/pos.component";
import { RealComponent}  from "./realUrl/real.component";
import {HaqiqatComponent} from "./haqiqat/haqiqat.component";
import {GgComponent} from "./get/gg.component";
import {ObservComponent} from "./observ/observ.component";


@NgModule({
    imports:[BrowserModule, FormsModule,HttpModule],
    declarations:[AppComponent, ChildComponent, 
                  InteractionBetweenComponent,
                  HttpComponent,
                  ObsComponent,
                  TestComponent,
                  OshibkaComponent,
                  ComplexComponent,
                  PostComponent,
                  SendingParamComponent,
                  PosComponent,
                  RealComponent,
                  HaqiqatComponent,
                  GgComponent,
                  ObservComponent
                  ],
    bootstrap:   [AppComponent]
})

export class AppModule{

}