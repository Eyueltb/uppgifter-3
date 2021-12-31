import React from 'react'

const Customer = ({customer}) => {
    return (
        <div className="card shadow" style={{maxWidth: 450 + 'px'}}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src="https://images.pexels.com/photos/3490393/pexels-photo-3490393.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid rounded-start image-size" alt="..." />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{customer.firstName} {customer.lastName}</h5>
                        <p className="card-text">{customer.email}</p>
                        <p className="card-text">{customer.address.address}</p>
                        <p className="card-text">{customer.address.postalCode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
