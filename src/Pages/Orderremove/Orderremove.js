import React,{useState,useEffect} from 'react';
import Footer from '../footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Orderremove.css'

const Orderremove = () => {
    const [manageallordrs,setManageallordrs]= useState([]);


    useEffect(() =>{
        fetch('https://sleepy-hollows-68944.herokuapp.com/manageallordrs')
        .then(res =>res.json())
        .then(data =>setManageallordrs(data))

    });

  const handledelete =id =>{
      const url = `https://sleepy-hollows-68944.herokuapp.com/manageallordrs/${id}`;
      fetch (url ,{
          method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
      })


  }

    return (
        <div >
            <Navigation></Navigation>
            <h1 className="textclour">please remove your order</h1>
            {
             manageallordrs.map(service => <div 
                key={service._id} >
                <h3>Products Name: {service.name}</h3>
                <h3>Bayer Email: {service.email}</h3>
                <h3>Bayer Address: {service.address}</h3>
                <h4>Bayer Phone Number: {service.phonenumber}</h4>
                <p> Products Description: {service.description}</p>
                <h2> Products net Price: {service.price}$</h2>
                <button className="button-44 m-3" onClick={() =>handledelete(service._id)}>Delete</button>
                 </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Orderremove;