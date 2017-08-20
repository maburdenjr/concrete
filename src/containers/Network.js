import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { loginUser, logoutUser } from '../actions/user';

class Network extends React.Component {
    render () {
        return (
            <div>
                <Navigation {...this.props} activeItem="Network"/>
                <h1>Network</h1>
                Networking is good for everyone.
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
)(Network);