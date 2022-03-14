import React from "react";
import Contacto from "./page/Contacto";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
         <Route exact path="/" component={Contacto} />
          {/* <Contacto /> */}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
