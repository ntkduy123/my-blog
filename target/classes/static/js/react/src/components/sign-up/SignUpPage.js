import React from 'react';
import '../../styles/styles.css';
import loginAvatar from '../../images/login-logo.jpg';

export default class SignUpPage extends React.Component {

    constructor(args) {
        super(args);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    onChange(event) {
        return this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', "/users/sign-up");
        xhr.send(JSON.stringify(
            {
                'username': this.state.username,
                'password': this.state.password
            }
        ));
        console.log(xhr.response);
    }

    render() {
        return (
            <div className="content">
                <form className="login-form" onSubmit={this.handleSubmit}>
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
                            <input type="submit" value="Sign Up" className="form-button margin-bottom" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}