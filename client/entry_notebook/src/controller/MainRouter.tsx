import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import HomePage from "../home/homePage";
import NotFoundPage from "../nofound/NotFoundPage";
class MainRouter extends React.Component {
  render() { 
    return (
      <Router>
        
        <Switch>
          <Route exact path="/home">
            <div className="App">
              <HomePage></HomePage>
            </div>
          </Route>
          <Route exact path='/invalid' component={NotFoundPage}>
          </Route>
          <Route path="/profile"></Route>
          <Redirect exact from="/" to="/home"></Redirect>
          <Redirect from="*" to='/invalid'></Redirect>
        </Switch>
      </Router>
    );
  }
}

export default MainRouter;