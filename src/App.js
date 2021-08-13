import './App.css';
import {useEffect, useState} from "react";
import {getUser} from "./service/github-api";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import InputForm from "./components/InputForm";
import LinkToRepo from "./components/LinkToRepo";


function App() {
  const [profile,setProfile] = useState()
  const [error,setError] = useState()

  useEffect(() => {
    getUser()
        .then(setProfile).catch(error => setError(error.response.status))
  },[])
console.log(profile)
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
              <LinkToRepo />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;


