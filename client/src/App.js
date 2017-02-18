import React  from 'react';
import {Provider} from 'react-redux';

import './App.css';

import configureStore from './configureStore';

import Users from './Users'

const store = configureStore();


const App = () => {
    return (
        <Provider store={store}>
            <div>
                <p>Hello, World!</p>
                <Users/>
            </div>
        </Provider>
    );
};

export default App;
