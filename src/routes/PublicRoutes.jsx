import {Route, Routes} from 'react-router-dom'
import React from "react"
import Contact from "../components/pages/Contact"
import Home from "../components/pages/Home"
import Proyects from '../components/pages/Proyects'
import Aboutme from '../components/pages/Aboutme'

function PublicRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/proyects' element={<Proyects/>}></Route>
            <Route path='/aboutme' element={<Aboutme/>}></Route>
        </Routes>
    )
}

export default PublicRoutes