import {USER_SELECTED} from "../actions";

export default function (state = null,action) {
    switch(action.type){
        case USER_SELECTED:
            return action.payload
    }
    return state
}