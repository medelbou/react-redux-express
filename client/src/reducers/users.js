import {USERS_FETCHED, USERS_REQUESTED} from '../actions/userActions';

const initialState = {
    isFetching: false,
    list: []
};

function users(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUESTED:
            return Object.assign({}, state, {isFetching: true});
        case USERS_FETCHED:
            return Object.assign({}, state, {list: action.users, isFetching: false});
        default:
            return state
    }
}

export default users;