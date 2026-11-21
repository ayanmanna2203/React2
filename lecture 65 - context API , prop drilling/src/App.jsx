import React from 'react'
import { useContext } from 'react'
import { ThemeContext, UserContext } from './main'
import Navbar from './component/Navbar'


function Parent (){
  return (
    <div style={{backgroundColor:"aqua" , padding : "20px" }}>
      <h1>Parent</h1>
      <Child />
    </div>
  )
}

function Child (){
  return (
    <div style={{backgroundColor:"blue" , padding : "20px" }}>
      <h1>Child</h1>
      <GrandChild />
    </div>
  )
}

function GrandChild (){
  const value = useContext(UserContext)
  console.log(value);
  return (
    <div style={{backgroundColor:"green" , padding : "20px" }}>

      <h1>GrandChild -{value}</h1>
    </div>
  )
}


function App() {
  let username = "Ayan Manna"

  return (
    <div style={{backgroundColor:"purple" , padding : "20px" }}>
        <h1>App</h1>

    <Navbar/>
    
      
    </div>
   
  )
}

export default App