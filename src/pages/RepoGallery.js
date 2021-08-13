import {useEffect, useState} from "react";
import {getRepos} from "../service/github-api";

export default function RepoGallery({profile}) {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos(profile.login).then(setRepos).catch(error => console.error(error))
    }, [])

    console.log("These are the Repos", repos)

    const repoMap = repos.map((repo) =>
        <li key={repo.id}>
            <a href = {repo.html_url} > {repo.name} </a>
        </li>
    );

    return(
        <section>
            <p>{repoMap}</p>
        </section>
    );
}