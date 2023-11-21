import {Route, Routes} from 'react-router-dom'
import React from "react"
import Contact from "../components/pages/Contact"
import Home from "../components/pages/Home"

function PublicRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )
}

export default PublicRoutes