import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';


const Singleorder = () => {
    const { serviceId } = useParams();
    const [service,setService]= useState({});

    useEffect(() =>{
        fetch(`https://sleepy-hollows-68944.herokuapp.com/manageallordrs/${serviceId}`)
        .then(res =>res.json())
        .then(data =>setService(data))
    })
    return (
        <div>
            <h2>details of oeder name:{service.name}</h2>
            <h2>this is singleorder: {serviceId}</h2>
            
        </div>
    );
};

export default Singleorder;