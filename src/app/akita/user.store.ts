import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { User } from './user.model';
​
export interface UsersState extends EntityState<User> {}
​​
@StoreConfig({ name: 'user' })
export class UsersStore extends EntityStore<UsersState, User> {
  constructor() {
    super();
  }
}