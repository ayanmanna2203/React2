import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Timer(){

  useEffect(()=>{
   const id =  setInterval(()=>{
      console.log("Timer");
    },1000)

    return ()=>{
      console.log("Timer clean up");
      clearInterval(id)
    }
  },[])


  return (
    <div>
      <h2>Timer component</h2>
    </div>
  );
}


function App({ title = "App content" }) {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [productCount, setProductCount] = useState(0)
  const [showTimer , setShowTimer] = useState(true)
  const [isLoading , setIsLoading] = useState(true)


  useEffect(() => {

    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/products?limit=0")
      // let data = await response.json()
      let {data} = await axios.get("https://dummyjson.com/products?limit=0")
      setProducts(data.products)
      setProductCount(data.total)
      setIsLoading(false)
      
    }
    getProducts()

  }, [name])

  // console.log("re-render");
  // console.log(name);
  // if(isLoading){
  //   return <div class="loader"></div>
  // }

  return (
    <div>
      {showTimer && <Timer/>}
     
      <button onClick={()=> setShowTimer((prev)=> !prev)}>set timer</button>
      <br />
      Product - {productCount} , {title}
      <input type="text" name="" id="" onInput={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <ul>
        { isLoading ? (<div class="loader"></div>):
          products.map((p) => <li key ={p.id}>{p.title}</li>)
        }
      </ul>
     
    </div>
  )
}

export default App