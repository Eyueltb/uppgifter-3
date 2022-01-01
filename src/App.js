import React from "react";
import { CreateCustomer } from "./components/customers/CreateCustomer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListCustomers} from './components/customers/ListCustomers'
import { LandingPage} from './components/customers/LandingPage'
import { NavBar }  from "./components/nav/NavBar";


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/home" element={<LandingPage/>}> </Route>
                <Route exact path="/list" element={<ListCustomers/>} >  </Route>
                <Route exact path="/createCustomer" element={<CreateCustomer/>} >  </Route>
            </Routes>
        </Router>
    );
}

export default App;
