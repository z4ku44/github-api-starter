import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import InputForm from "./components/InputForm";
import LinkToRepo from "./components/LinkToRepo";


function App() {

  return (
      <Router>
        <Switch>
          <Route exact path={"/"}>
              <Header />
              <UserInfo />
              <InputForm />
              <LinkToRepo />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;


