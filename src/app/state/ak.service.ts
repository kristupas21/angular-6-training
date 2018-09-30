import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { AkStore } from './ak.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AkService {

  constructor(private akStore: AkStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.akStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.akStore.add(entity);
    // });
  }

}
