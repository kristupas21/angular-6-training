import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Ak } from './ak.model';

export interface AkState extends EntityState<Ak> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ak' })
export class AkStore extends EntityStore<AkState, Ak> {

  constructor() {
    super();
  }

}

