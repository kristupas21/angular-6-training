import { Component, OnInit, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(private ngZone: NgZone) {
    akitaDevtools(this.ngZone);
  }

  ngOnInit() {
   
  }
}
