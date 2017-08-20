import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { loginUser, logoutUser } from '../actions/user';

class Login extends React.Component {
    render () {
        return (
            <div>
                <Navigation {...this.props} activeItem="login"/>
                <h1>Login</h1>
                Sir, I'm going to need to see your credentials.
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { activeUser, uiView } = state;
    return {
        uiView,
        activeUser
    };
}

function mapDispatchToProps (dispatch) {
    return {
        userLogin: (user) => {
            dispatch(loginUser(user));
        },
        userLogout: () => {
            dispatch(logoutUser());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);