import { User } from '../models/user.model';
import * as UserAction from '../actions/user.action';

const initialState: User.UserData = {
    name: 'James',
    surname: 'Mark'
}
export function userReducer(state:User.UserData[] = [initialState], action: UserAction.Actions) {
    switch (action.type){
        case UserAction.UserActionTypeDesc.ADD_USER:
            return [...state, action.payload];
        case UserAction.UserActionTypeDesc.REMOVE_USER:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        default:
            return state;
    }
}