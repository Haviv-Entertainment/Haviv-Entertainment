import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Favicon from 'react-favicon';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import Weddings from './components/Weddings';
import Ceremony from './components/Ceremony';
import Events from './components/Events';
import Acapella from './components/Acapella';
import Contact from './components/Contact';
import './styling/app.css';

const App = () => (
  <div>
    {/* <Favicon url="https://i.imgur.com/oCRyRm3.png" /> */}
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/home"
        component={Home}
      />
      <Route
        exact
        path="/about"
        component={AboutUs}
      />
      <Route
        exact
        path="/packages"
        component={Packages}
      />
      <Route
        path="/weddings"
        component={Weddings}
      />
      <Route
        path="/ceremony"
        component={Ceremony}
      />
      <Route
        path="/events"
        component={Events}
      />
      <Route
        path="/acapella"
        component={Acapella}
      />
      <Route
        path="/contact"
        component={Contact}
      />
    </Switch>
  </div>
);

export default App;
