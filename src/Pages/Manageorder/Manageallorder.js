import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../footer/Footer'

const Manageallorder = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://sleepy-hollows-68944.herokuapp.com/manageallordrs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="add-service">
            <h1 className="textclour">place your order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 200 })} placeholder="Name" />
                <input {...register("email", { required: true, maxLength: 200 })} placeholder="email" />
                <input {...register("address", { required: true, maxLength: 200 })} placeholder="Address" />
                <input type="number" {...register("phonenumber")} placeholder="phonenumber" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <button className="button-40 m-4">Submit</button>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Manageallorder;