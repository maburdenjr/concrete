import { LOGIN_USER, LOGOUT_USER } from '../actions/user';

const initState = {
    user: null,
    authenticated: false
};

const activeUser = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                user: action.userName,
                authenticated: true
            };
        case LOGOUT_USER:
            return {
                user: 'null',
                authenticated: false
            };

        default:
            return state;

    }
};

export default activeUser;
