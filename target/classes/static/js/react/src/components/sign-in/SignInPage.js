import React from 'react';
import '../../styles/styles.css';
import loginAvatar from '../../images/login-logo.jpg';
import Zalo from  '../../../plugins/zalo-sdk';

export default class SignInPage extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
            username: '',
            password: ''
        };

        Zalo.init({
                version: '2.0',
                appId: '3583311051249398471',
                redirectUrl: 'http://localhost:8081/admin'
            }
        );
    };

    onChange(event) {
        return this.setState({
            [event.target.name]: event.target.value
        });
    };

    signIn() {

    }

    signInWithZalo() {
        Zalo.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                Zalo.api('/me',
                    'GET',
                    {
                        fields: 'id,name'
                    },
                    function (response) {
                        console.log(response);
                    }
                );
                console.log(Zalo.apiClient);
            } else {
                Zalo.login();
            }
        });
    }

    render() {
        return (
            <div className="content">
                <div className="login-form">
                    <div className="form-header">
                        Welcome to my website
                    </div>
                    <div className="form-body">
                        <div className="form-body-container center">
                            <div>
                                <img className="avatar" src={loginAvatar} />
                                <p className="username">Ntkduy</p>
                            </div>
                            <div className="form-group">
                                <i className="fa fa-phone"/>
                                <input autoComplete="off" role="presentation" tabIndex="2" name="username" value={this.state.username} type="text" placeholder="Username" onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <i className="fa fa-lock"/>
                                <input autoComplete="off" role="presentation" tabIndex="2" name="password" value={this.state.password} type="password" placeholder="Password" onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-button margin-bottom">
                                Sign In
                            </div>
                            <div className="form-button btn-default margin-bottom" onClick={this.signInWithZalo}>
                                Sign in with Zalo
                            </div>
                            <div className="form-button btn-default" onClick={this.signInWithZalo}>
                                Sign in with Facebook
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}