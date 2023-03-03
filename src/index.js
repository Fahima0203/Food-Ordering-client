import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodDetailsForm from './Components/FoodDetailsForm';
import FoodDisplay from './Components/FoodDisplay';
import Login from './Components/Login';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Signuppage from './Components/Signuppage';
import FoodAdded from './Components/FoodAdded';
import AddedtoCart from './Components/AddedtoCart'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="https://food-ordering-server.onrender.com/FoodDisplay" element={<FoodDisplay />}></Route>
        <Route path="https://food-ordering-server.onrender.com/Login" element={<Login />}></Route>
        <Route path="https://food-ordering-server.onrender.com/SignUp" element={<Signuppage />}></Route>
        <Route path="https://food-ordering-server.onrender.com/Contact" element={<Contact />}></Route>
        <Route path="https://food-ordering-server.onrender.com/FoodDetailsForm" element={<FoodDetailsForm />}></Route>
        <Route path='https://food-ordering-server.onrender.com/FoodAdded' element={<FoodAdded />}></Route>
        <Route path='https://food-ordering-server.onrender.com/AddedtoCart' element={<AddedtoCart />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);