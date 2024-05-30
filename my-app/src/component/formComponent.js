import React, { useState } from 'react';

export default function FormComponent() {
    const [getName, setName] = useState("");
    const [getPrice, setPrice] = useState("");
    const [getStock, setStock] = useState("Yes");
    const [getCity, setCity] = useState("");
    
    const SubmitClick = (event) =>{
        document.write(`Name=${getName}<br>Price=${getPrice}<br>City=${getCity}<br>Stock=${getStock}<br>`)
    }

    return (
        <form className='container' onSubmit={SubmitClick}>
            <h2>Registration Product</h2>
            <div className="mt-2">
                <label className="form-label">Product Name</label>
                <div>
                    <input
                        onChange={e=>setName(e.target.value)}
                        type="text"
                        name="name"
                        value={getName}
                        className="form-control"
                        
                    />
                </div>
            </div>
            <div className="mt-2">
                <label className="form-label">Price</label>
                <div>
                    <input
                        onChange={e=>setPrice(e.target.value)}
                        name="price"
                        value={getPrice}
                        type="text"
                        className="form-control"
                        
                    />
                </div>
            </div>
            <div className="mt-2">
                <label className="form-label">Shipped To</label>
                <div>
                    <select className="form-select" name='city' value={getCity} onChange={e=>setCity(e.target.value)}>
                        
                    
                        <option value="">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>
            </div>
            <div className="mt-2">
                <label className="form-label">In Stock</label>
                <div className="mt-2">
                    <div className="form-check">
                        <input onChange={e=>setStock(e.target.value)} name='stock' value={getStock} type="checkbox" className="form-check-input"/>
                        Yes
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="d-grid">
                    <button className="btn btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </form>
    );
}
