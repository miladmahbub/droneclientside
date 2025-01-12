import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const {register , handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://sleepy-hollows-68944.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="textclour">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 200 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <button className="button-40">SUBMIT</button>
                {/* <input className=".button-40" type="submit" /> */}
            </form>
        </div>
    );
};

export default AddService;