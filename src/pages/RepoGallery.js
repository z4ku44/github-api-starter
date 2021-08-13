import {useEffect, useState} from "react";
import {getRepos} from "../service/github-api";
import Header from "../components/Header";

export default function RepoGallery({profile}) {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos(profile.login).then(setRepos).catch(error => console.error(error))
    }, [])

    console.log("These are the Repos", repos)

    const repoMap = repos.map((repo) =>
        <li key={repo.id}>
            {repo.name}
        </li>
    );

    return (
        <section>
            <Header/>
            <p>{repoMap}</p>
        </section>
    );
}