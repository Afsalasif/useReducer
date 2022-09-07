import React, { useReducer, useState } from 'react';
import './App.css';
// import Login from './components/Login';
// import Profile from './components/Profile';
const initialState = [{ id: Date.now(), name: "", email: "" }]

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state,action.payload];
    case "decrement":
      return state - 1;
    default:
      throw new Error()

  }

}

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  React.useEffect(()=>{
    console.log(name,email)
  },[name,email])

  const [state, dispatch] = useReducer(reducer, initialState)

  const addContact=(e)=>{
    e.preventDefault();
    const contact ={
      id:Date.now(),
      name,
      email,
    }

    setName("")
    setEmail('')
    dispatch({type:"add",payload:contact})
  }
  return (
    <div className="App border">
      <h1>useReducer hook</h1>
      <form onSubmit={addContact}>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button>Add</button>
      </form>

      <div>
        <ul>
          {state.map(contact=>{
            return(<li key={contact.id}>
              <h2>
                {contact.name}
              </h2>
              
            </li>)
          })}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
