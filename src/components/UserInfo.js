


export default function UserInfo({ profile }) {
    return(
        <section>
            <div>
                <img src= {profile.avatar_url}  alt="profile"/>
            </div>
            <div>
                <p>{profile.login}</p>
            </div>
        </section>
    );
}