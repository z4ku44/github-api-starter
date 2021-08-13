import {useEffect, useState} from "react";
import {getUser} from "../service/github-api";

export default function InputForm() {
    const [profile,setProfile] = useState()
    const [error,setError] = useState()

    useEffect(() => {
        getUser(profile)
            .then(setProfile).catch(error => setError(error.response.status))
    },[])
    if(!profile && !error){
        return <p>loading</p>
    }
    const eventBehavior = event => {
        event.preventDefault()
    }
    /*
    const handleSubmit = () => {
        //WIR SIND HIER GEBLIEBEN
    }
    */

    return (
        <section>
            <form onSubmit ={eventBehavior}>
                <input type="text" onChange={event => setProfile(event.target.value)}/>
                <button type="submit" onClick={event => (
                    console.log(profile)
                )}
                >Search</button>
            </form>
        </section>
    );
}
