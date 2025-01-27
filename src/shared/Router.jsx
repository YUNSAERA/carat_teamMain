import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Layout/>}/> 
          <Route path="*" element={<Layout/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
