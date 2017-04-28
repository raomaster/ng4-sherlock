import { AngularFireModule} from 'angularfire2';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { CollectorComponent } from './collector/collector.component';
import { RatingComponent } from './rating/rating.component';
import { NotifierComponent } from './notifier/notifier.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { AiComponent } from './ai/ai.component';
import { ReportComponent } from './report/report.component';
import { AutopilotComponent } from './autopilot/autopilot.component';
import { AccuracyComponent } from './accuracy/accuracy.component';
import { NavigationComponent } from './navigation/navigation.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyC1D9Q-4F6zA4jw5Hzn-nX8hoNyjZv1cYY',
    authDomain: 'ng4-sherlock.firebaseapp.com',
    databaseURL: 'https://ng4-sherlock.firebaseio.com',
    projectId: 'ng4-sherlock',
    storageBucket: 'ng4-sherlock.appspot.com',
    messagingSenderId: '246893403904'
  };

@NgModule({
  declarations: [
    AppComponent,
    CollectorComponent,
    RatingComponent,
    NotifierComponent,
    EvidenceComponent,
    AiComponent,
    ReportComponent,
    AutopilotComponent,
    AccuracyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
