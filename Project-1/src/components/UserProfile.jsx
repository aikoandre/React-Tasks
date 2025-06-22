import { useState } from "react";
import AddHobbyForm from "./AddHobbyForm";

function UserProfile(props) {

    const [isFollowing, setIsFollowing] = useState(false);

    const [hobbies, setHobbies] = useState(props.hobbies);

    const handleAddHobby = (hobbyToAdd) => {
        setHobbies([...hobbies, hobbyToAdd]);
    }
    

    const handleFollowClick = () => {
        setIsFollowing(prev => !prev);
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <div className="max-w-sm p-6 bg-white border-4 border-gray-300 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold text-black">{props.name}</h1>
            <p className="mt-2 text-gray-700">{props.bio}</p>
                <ul className="mt-4 list-disc list-inside">
                    {/* Using map to create <li> to each Hobby*/}
                    {hobbies.map(hobby => (
                    <li key={hobby} className="mb-1 text-gray-700">{hobby}</li>
                    ))}
                </ul>
                <button
                    onClick={handleFollowClick}
                    className={`w-full p-2 mt-2 rounded-2xl font-semibold text-text-gray-700 focus:outline-none ${
                        isFollowing
                            ? 'bg-green-600 border-2 border-green-700' // "Following"
                            : 'bg-blue-500 border-2 border-blue-600' // "Follow"
                    }`}
                    >
                    {isFollowing ? 'Following' : 'Follow'}
                </button>
                <AddHobbyForm onAddHobby={handleAddHobby} />
            </div>
        </div>
    );
}

export default UserProfile;