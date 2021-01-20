import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage/LoginPage';
import NewsPage from './containers/NewsPage/NewsPage';

export default function App() {
  return(
      <div className="App">
        <Switch>
          <Route path='/news' component={NewsPage}></Route>
          <Route path='/' exact component={LoginPage}></Route>
        </Switch>
      </div>
  );
};

