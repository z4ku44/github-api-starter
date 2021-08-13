import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import LinkToRepo from "./components/LinkToRepo";
import {useState} from "react";
import {getUser} from "./service/github-api";


function App() {
    const [inputName, setInputName] = useState("")
    const [profile, setProfile] = useState()
    const [error, setError] = useState()


    console.log("Profil: ", profile)


    const eventBehavior = event => {
        event.preventDefault()
        getUser(inputName)
            .then(setProfile).catch(error => setError(error.response.status))

    }


    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Header/>
                    <UserInfo profile = {profile}/>
                    <section>
                        <form onSubmit={eventBehavior}>
                            <input type="text"  onChange={event => setInputName(event.target.value) }/>
                            <button type="submit" >Search</button>
                        </form>
                    </section>
                    <LinkToRepo/>

                </Route>
            </Switch>
        </Router>
    );
}

export default App;


