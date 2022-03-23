import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessoes from "../Sessoes/Sessoes";

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes" element={<Sessoes />} />                 
            </Routes>            
        </BrowserRouter>       
    );    
}