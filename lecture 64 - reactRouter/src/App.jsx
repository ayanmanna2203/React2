import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NotFoundPage from './component/NotFoundPage'
import { Link } from "react-router-dom";
import Login from './component/Login';
import DashBoard from './component/DashBoard';

function Home() {
  return <h1>Home</h1>
}
function ProductPage() {
  return <h1>Product Page</h1>
}

function AboutUs() {
  return <h1>About us</h1>
}

function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/product-page"}>Product page</Link>
        <br />
        <Link to={"/about-us"}>aboutus</Link>
        <br />
        <Link to={"/login"}>Login</Link>
      </ul>
      <Outlet />
      {/* {page == "home" && <Home />}
       {page == "productpage" && <ProductPage />}
       {page == "aboutus" && <AboutUs />} */}
    </>
  )
}




function App() {
  const [page, setPage] = useState("home")
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/dashboard' element={<DashBoard />} />

      </Route>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/login' element={<Login />} />

    </Routes>
  )
}

export default App