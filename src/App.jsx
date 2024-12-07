import RegForm from './componets/RegForm'
import Team from './componets/team/Team'
import  { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [newObject, setNewObject] = useState({});
  return (
    <div className="app">
      <div>
      <RegForm setNewObject={setNewObject}/>
    </div>
    <div>
      <Team user={newObject}/>
      </div>
    </div>

  )
}

export default App