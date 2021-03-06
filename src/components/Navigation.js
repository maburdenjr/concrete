import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {
    render() {
        if (this.props.activeUser.authenticated) {
                    return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="{{ url_for('index.landing') }}">Mindforge</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/library">Library</Link></li>
                            <li><Link to="/network">Network</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/" onClick={() => this.props.userLogout()}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
        } else {
            return (
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="{{ url_for('index.landing') }}">Mindforge</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/library">Library</Link></li>
                                <li><Link to="/login" onClick={() => this.props.userLogin('blah')}>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }


    }
}

export default Navigation;
