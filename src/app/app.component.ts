import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { initializeApp, database } from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'Within 2 miles';
  constructor(private af: AngularFire) {
    const courses$: FirebaseListObservable<any> = af.database.list('ads');
    courses$.subscribe(
      val => console.log(val)
    );
  }
}

