import './App.css';
import {useEffect, useState} from "react";
import {getLoggedInUser} from "./service/github-api";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import InputForm from "./components/InputForm";


function App() {
  const [profile,setProfile] = useState()
  const [error,setError] = useState()

  useEffect(() => {
    getLoggedInUser().then(setProfile).catch(error => setError(error.response.status))
  },[])

  if(!profile && !error){
    return <p>loading</p>
  }

  return (
      <Router>
        <Switch>
          <Route exact path={"/"}>
              <Header />
              <UserInfo />
              <InputForm />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;


