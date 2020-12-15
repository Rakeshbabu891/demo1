import React from "react";

import { Route, Switch } from "react-router-dom";

// import Header from "./components/header/header.component";
// import HomePage from "./pages/homePage/homePage.component";
// import UserCard from "./pages/user-card/user-card.component";
import Demo from "./pages/demo/demo.component";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/user" component={UserCard} /> */}
          <Demo />
        </Switch>
      </div>
    );
  }
}

export default App;
