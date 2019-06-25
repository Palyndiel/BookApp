import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  	const config = {
  	  apiKey: "AIzaSyB5HkwnHLUxDZxJ54UIE-CthUs0mGZn2J8",
      authDomain: "bookapp-3575f.firebaseapp.com",
      databaseURL: "https://bookapp-3575f.firebaseio.com",
      projectId: "bookapp-3575f",
      storageBucket: "gs://bookapp-3575f.appspot.com/",
      messagingSenderId: "985110590154",
      appId: "1:985110590154:web:53b72ddd745d505d"
    };
    firebase.initializeApp(config);
  }
}
