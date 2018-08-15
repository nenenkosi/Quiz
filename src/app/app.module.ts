import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { Quiz2Page } from '../pages/quiz2/quiz2';
import { Quiz3Page } from '../pages/quiz3/quiz3';
import { Quiz4Page } from '../pages/quiz4/quiz4';
import { Quiz5Page } from '../pages/quiz5/quiz5';
import { EndPage } from '../pages/end/end';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage,
    Quiz2Page,
    Quiz3Page,
    Quiz4Page,
    Quiz5Page,
    EndPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage,
    Quiz2Page,
    Quiz3Page,
    Quiz4Page,
    Quiz5Page,
    EndPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
