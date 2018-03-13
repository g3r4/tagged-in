import _ from 'lodash';
import { LOAD_FILE } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case LOAD_FILE:
            // const post = action.payload.data;
            // const newState = { ... state };
            // newState[post.id] = post
            // return newState;
            return action.payload.data;
        default:
            return state;
    }
}