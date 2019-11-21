import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from './base/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from './app.state'
import * as UserActions from './base/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userData$: Observable<User.UserData[]>;

  constructor (private store: Store<AppState>) {
    this.userData$ = this.store.select('user');
  }

  addUserEvent(name, url) {
    this.store.dispatch(new UserActions.AddUser({name: name, surname: url}));
  }

  deleteUserEvent(index) {
    this.store.dispatch(new UserActions.RemoveUser(index));
  }
}
