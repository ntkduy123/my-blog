import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';
import AboutPage from './components/about/AboutPage';
import SignInPage from './components/sign-in/SignInPage';
import SignUpPage from './components/sign-up/SignUpPage';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="/sign-in" component={SignInPage}/>
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/blogs" component={BlogPage}/>
            <Route path="/about" component={AboutPage}/>
        </Route>

    </Router>),
    document.getElementById('root')
);