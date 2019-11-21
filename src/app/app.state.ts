import { User } from './base/models/user.model';

export interface AppState {
    readonly user: User.UserData[];
}