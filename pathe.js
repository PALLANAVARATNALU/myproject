import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./home";
import About from "./about";
import Contact from "./contact";
import Courses from "./courses";
import Login from "./login";
import Signin from "./signup";
import Loginm from "./loginm";
import Hello from "./form";
var Pathof=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Page/>}>
            </Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
           <Route path="/courses" element={<Courses/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/home" element={<Page/>}></Route>
           <Route path="/" element={<Signin/>}></Route>
           <Route path="/login1" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Pathof;