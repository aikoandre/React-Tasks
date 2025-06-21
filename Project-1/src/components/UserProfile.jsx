import { useState } from 'react';

function UserProfile ({name, avatar, bio}) {

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
    <div>
        <img src={avatar} alt={name} />
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>Like</button>
    </div>
    );
}

export default UserProfile;