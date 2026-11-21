import { useState } from "react";
import { createContext } from "react";


export let ThemeContext = createContext(null)

export function ThemeProvider({children}){

    const [theme , setTheme] = useState("light")
            


    return(
        <>
            <ThemeContext value ={theme}>{children}</ThemeContext>
        
        
        </>
    )
}

// import React from 'react'

// function ThemeContext() {
//   return (
//     <div>ThemeContext</div>
//   )
// }

// export default ThemeContext