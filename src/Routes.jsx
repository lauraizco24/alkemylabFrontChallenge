import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from './components/home/Home';
import HomeAdmin from './components/home/HomeAdmin';
import HomeStudent from './components/home/HomeStudent';


const Routes = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={HomeAdmin} />
        <Route exact path="/students" component={HomeStudent} />

       
      </Switch>
    </Router>
  );
};
export default Routes;
