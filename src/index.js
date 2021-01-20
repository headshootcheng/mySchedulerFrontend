import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Auth = lazy(() => import('./page/auth'));
const Home = lazy(() => import('./page/home'));
ReactDOM.render(
  <Router>
      <Suspense fallback={<div>Loading ...</div>}> 
          <Switch>
              <Route path = "/auth" component= {Auth}/>
              <Route path = "/" component= {Home}/>            
          </Switch>
      </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
