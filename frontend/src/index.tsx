import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Containers/Login';
import Home from './Containers/Home';
import ContractForm from './Containers/ContractForm';
import Store from './Store'
import { Provider } from 'react-redux'
import ViewContract from './Containers/ViewContract';


const store = Store()

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <Router  >
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contract/create">
            <ContractForm />
          </Route>
        </Switch>
        <Switch>
          <Route path="/contract/view/:id">
            <ViewContract />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
