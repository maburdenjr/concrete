import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { loginUser, logoutUser } from '../actions/user';

class Library extends React.Component {
    render () {
        return (
            <div>
                <Navigation {...this.props} activeItem="library"/>
                <div className="container">
                    <h1>Library</h1>
                    The Libray is open
                </div>
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
)(Library);