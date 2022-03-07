import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [user,setUser]=useState([]);

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
       .then(data=>setUser(data))

    },[])
    return (
        <div className='container'>
            <h1>This is Services</h1>
            
            <div className="service-cart">
                <div className="row">
                    
                    {user.map((pd)=>(
                      <div key={pd.id} className="col-md-4">
                      <div className="cart p-3 m-3 border border">
                          <div className="cart-img">
                              <img src="" alt="" />
                              </div>
                              <h5>{pd.name}</h5>
                              <p>{pd.email}</p>
                              <p>{pd.address?.city}</p>
                          </div>
                      </div>  
                    ))}
                        
                    </div>
                </div>

            
        </div>
    );
};

export default Services;