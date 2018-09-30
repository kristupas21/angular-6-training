import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AkStore, AkState } from './ak.store';
import { Ak } from './ak.model';

@Injectable({ providedIn: 'root' })
export class AkQuery extends QueryEntity<AkState, Ak> {

  constructor(protected store: AkStore) {
    super(store);
  }

}
