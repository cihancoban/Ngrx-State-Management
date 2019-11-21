import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActionTypeDesc {
    ADD_USER = '[TUTORIAL] Add',
    REMOVE_USER = '[TUTORIAL] Remove'
}

export class AddUser implements Action {
    readonly type = UserActionTypeDesc.ADD_USER;
    constructor (public payload: User.UserData) {}
}

export class RemoveUser implements Action {
    readonly type = UserActionTypeDesc.REMOVE_USER;
    constructor (public payload: number) {}
}

export type Actions = AddUser | RemoveUser;