import React from 'react'
import { useContext } from 'react'
import { ThemeContext, UserContext } from '../main'
import { use } from 'react'

function Navbar() {
    // const value = useContext(UserContext)

    const theme = use(ThemeContext)
    console.log(theme);

  return (
    <div>
        <h1>Navbar</h1>

        <p>Theme : {theme}</p>

    </div>
  )
}

export default Navbar