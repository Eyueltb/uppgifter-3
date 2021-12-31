const ApiCustomerClient = {
    fetchCustomers: async () => {
        return  await (await fetch("http://localhost:8080/api/customer")).json();
    },
    fetchCustomer: async(customerId) => {
        return (await (fetch(`http://localhost:8080/api/customer/${customerId}`))).json();
    },
    saveCustomer:async (customer)=>{
        return  await (await fetch('http://localhost:8080/api/customer/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(customer)
        })).json()
    },
    updateCustomer: async (customerId, customer) => {
        return await (await fetch(`http://localhost:8080/api/customer/update/${customerId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(customer),
        })).json()
    },
    removeCustomer:async (customerId)=>{
        return  await fetch(`http://localhost:8080/api/customer/removeCustomer/${customerId}`, {
            method: 'DELETE',
        }).then(res=>res.json())
    },
}
export default ApiCustomerClient;