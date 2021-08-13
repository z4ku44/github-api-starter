
import {getUser} from "../service/github-api";
import {useState} from "react";

export default function InputForm() {
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
        <section>
            <form onSubmit={eventBehavior}>
                <input type="text"  onChange={event => setInputName(event.target.value) }/>
                <button type="submit" >Search</button>
            </form>
        </section>
    );
}
