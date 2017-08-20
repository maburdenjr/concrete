import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { loginUser, logoutUser } from '../actions/user';

class Profile extends React.Component {
    render () {
        return (
            <div>
                <Navigation {...this.props} activeItem="profile"/>
                <h1>Profile</h1>
                Please, tell us some more about yourself.
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
)(Profile);