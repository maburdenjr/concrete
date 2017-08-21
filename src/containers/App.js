import { connect } from 'react-redux';
import React from 'react';
import Navigation from '../components/Navigation';
import { loginUser, logoutUser } from '../actions/user';


class App extends React.Component {
    render () {
        return (
            <div>
                <Navigation {...this.props} activeItem="home" />
                <div className="container">
                    <h1>Home</h1>
                    This is the Home Page
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
)(App);