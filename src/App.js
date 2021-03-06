import React from "react";
import { CreateCustomer } from "./components/customers/CreateCustomer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListCustomers} from './components/customers/ListCustomers'
import { LandingPage} from './components/customers/LandingPage'
import { NavBar }  from "./components/nav/NavBar";
import SignUp from "./components/customers/SignUp";


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/home" element={<LandingPage/>} /> 
                <Route exact path="/list" element={<ListCustomers/>} />  
                <Route exact path="/createCustomer" element={<CreateCustomer/>} />  
            </Routes>
        </Router>
    );
}

export default App;
