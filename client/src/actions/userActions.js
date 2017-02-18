export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_REQUESTED = 'USERS_REQUESTED';

function usersFetched(users) {
    return {
        type: USERS_FETCHED,
        users

    }
}

function usersRequested() {
    return {
        type: USERS_REQUESTED
    }
}

export function fetchUsers() {
    return (dispatch) => {
        dispatch(usersRequested());
        return fetch('/users').then(response => response.json())
            .then((json) => dispatch(usersFetched(json)))
    }
}