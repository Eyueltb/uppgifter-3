import React,{useState, useEffect} from 'react'
import Customer from './Customer'
import ApiCustomerClient from "../api/ApiCustomerClient";

export const ListCustomers = () => {
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

        </div>
    )
}
