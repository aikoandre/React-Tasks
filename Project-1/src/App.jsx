import UserProfile from "./components/UserProfile"

function App() {
  return (
    <UserProfile
      name="David Miller"
      bio="Graphic Designer and dog enthusiast"
      hobbies={['Sketching', 'Photography', 'Traveling']}
      />
  )
}

export default App
