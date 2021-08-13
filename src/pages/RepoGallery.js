import {useState} from "react";
import {getRepos} from "../service/github-api";

export default function RepoGallery({profile}) {

    const [repo, setRepo] = useState()


        getRepos(profile.login).then(setRepo).catch(error => console.error(error))

    const repoMap = repo.map
    console.log(repo)
    return (
        <section>
            <p>hallo</p>
        </section>
    );
}