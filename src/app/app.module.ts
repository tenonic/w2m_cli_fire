import { firebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { HttpService } from './services/http.service';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsListComponent,
    AddEditEventComponent,
    AdsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
