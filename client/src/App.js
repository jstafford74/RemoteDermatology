import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/Demo";
import TeleMed from "./pages/TeleMed";


const App = () => {

  return (

    <div >
      <Router >
        <>
          <StickyNav />
        </>

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/rmt" component={Demo} />
          <Route path="/telemed" component={TeleMed} />
        </Switch>
      </Router>
    </div>

  );
};

export default App;
