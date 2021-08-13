import {getRepos} from "../service/github-api";
import {useState} from "react";

export default function UserInfo({ profile }) {


    return(
        <section>
            <div>
                <img src= {profile ? profile.avatar_url : "no pictures "}  alt="profile"/>
            </div>
            <div>
                <p>{profile ? profile.repos_url : "no user"}</p>
            </div>
        </section>
    );
}