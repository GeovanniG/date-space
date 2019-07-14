import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
// import UserForm from '../components/UserForm/UserForm';

const Router = () => {
    return (
        <BrowserRouter basename="/date-space" >
            <Switch>
                <Route path="/" component={Home} exact />
                {/* <Route path="/form" component={UserForm} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;