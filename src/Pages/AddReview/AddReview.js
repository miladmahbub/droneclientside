import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../footer/Footer';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://sleepy-hollows-68944.herokuapp.com/addreview', data)
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
            <h2 className="textclour">Please Add Your  valuable  review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="image url" />
            <textarea {...register("description")} placeholder="Description" />
            <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
            <button className="button-44 m-3">SUBMIT</button>
            </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddReview;