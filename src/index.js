import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from 'reducers';
import './main.css';
import Layout from 'containers/layout';
import Phones from 'containers/phones';
import Phone from 'containers/phone';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}/>
                <Route path='/categories/:id' component={Phones}/>
            </Route>
            <Route path='/phones/:id' component={Phone}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
