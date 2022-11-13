import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MenSaloon from "../Components/MensSaloon";
import WomenService from "../Components/WomenService";

import Mentherapis from "../Components/Mentherapis";
import Womentherapis from "../Components/Womentherapis";



export default function AllRoute() {
    
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mensaloon" element={<MenSaloon/>}></Route>
        <Route path="/womensaloon" element={<WomenService/>}></Route>
        <Route path="/mentherapis" element={<Mentherapis/>}></Route>
        <Route path="/womentherapis" element={<Womentherapis/>}></Route>
   
      </Routes>
    );
}