import { useState } from "react"

function AddHobbyForm({ onAddHobby }) {
    
    const [newHobby, setNewHobby] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newHobby.trim() === '') return;
        onAddHobby(newHobby);
        setNewHobby('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
            <input
                type="text"
                value={newHobby}
                onChange={e => setNewHobby(e.target.value)}
                className="flex-1 w-full p-2 mt-2 rounded-2xl font-semibold text-white bg-gray-500 focus:outline-none"
                placeholder="Add a new hobby"
                />
            <button
                onClick={handleSubmit}
                type="submit"
                className="p-2 px-4 mt-2 rounded-2xl font-semibold  text-white bg-gray-900 hover:bg-black focus:outline-none"
                >
                Add
            </button>
        </form>
    )
}

export default AddHobbyForm;