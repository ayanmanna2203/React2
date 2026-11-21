import { StrictMode , createContext } from 'react'
import { createRoot  } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

export let UserContext = createContext(null)
export let ThemeContext = createContext(null)

let username = "Ayan Manna"

createRoot(document.getElementById('root')).render(
  
    // <UserContext value={username}>
    //   <App />
    // </UserContext>


    <ThemeProvider>
      <App/>
    </ThemeProvider>
)
