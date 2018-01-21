import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/home/HomePage';
import BlogPage from './components/blog/BlogPage';

export default (
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/blogs" component={BlogPage}/>
    </Router>
);