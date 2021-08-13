import {useState} from "react";

export default function InputForm({profile}) {
    const [inputUser, setInputUser] = useState({})
    const eventBehavior = event => {
        event.preventDefault()
    }

    return (
        <section>
            <form onSubmit ={eventBehavior}>
                <input type="text" onChange={event => setInputUser(event.target.value)}/>
                <button type="submit" onClick={event => (console.log(inputUser))}>Search</button>
            </form>
        </section>
    );
}

