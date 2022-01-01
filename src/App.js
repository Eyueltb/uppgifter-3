import React, {useEffect, useState} from "react";
import { CreateCustomer } from "./components/customers/CreateCustomer";
import Customer from "./components/customers/Customer";
import ApiCustomerClient from "./components/api/ApiCustomerClient";

function App() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        ApiCustomerClient.fetchCustomers().then(setCustomers).catch(err=>console.log(err))
    },[])

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {

                    customers.map(customer => (
                        <div key={customer.id} className="col">

                            <Customer  customer={customer} />
                        </div>
                    ))
                }
            </div>
            <CreateCustomer customers = {customers}  customersInfo = {setCustomers} />
        </div>
    );
}

export default App;
