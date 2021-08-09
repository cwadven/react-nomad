import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';
import Collection from '../Routes/Collection';
import Season from '../Routes/Season';
import Header from './Header';

// eslint-disable-next-line react/display-name
export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/tv'} exact component={TV} />
            <Route path={'/tv/popular'} render={() => <h1>Popular</h1>} />
            <Route path={'/search'} exact component={Search} />
            <Route path={'/movie/:id'} component={Detail} />
            <Route path={'/show/:id/season/:seasonNumber'} component={Season} />
            <Route path={'/show/:id'} component={Detail} />
            <Route path={'/collection/:id'} component={Collection} />
            <Redirect from={'*'} to={'/'} />
        </Switch>
    </Router>
);
