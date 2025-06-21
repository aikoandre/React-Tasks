import { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React fundamentals' },
    { id: 2, text: 'Render a list of items' },
    { id: 3, text: 'Prepare for the next task' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {e.preventDefault(); {
      const newTodo = {id: Date.now(), text: inputValue};
      setTodos([...todos, newTodo]);
      setInputValue('');
  }}

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        type="text" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
      <button type="submit">Add Todo</button>
      <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
    </form>
  );
}

export default App
