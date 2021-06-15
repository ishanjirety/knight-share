import "./ProfileListCard.css";

export function ProfileListCard({imgUrl,username}) {
    return (
        <div className="profile-list-card">
            <div className="user-info">
                <img className="user-profile-card" src={imgUrl} alt={username} />
                <p className="username">{username}</p>
            </div>
        </div>
    );
}