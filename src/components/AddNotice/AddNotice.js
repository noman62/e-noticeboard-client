import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddNotice.css';

const AddNotice = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };

        const url = `http://localhost:8080/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
        console.log(eventData);
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '2906dcc5c0c0e1002829616afd4bb281');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div>
            <div className="sidenav">
                <Link className="nav-link text-white" aria-current="page" to="/updateNotice">All Notices</Link>
                <Link className="nav-link text-white" aria-current="page" to="/form">Upload Notice</Link>
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
               
            </div>

            <div className="shadow p-3 mb-5 bg-body rounded" style={{ marginLeft: '40%', marginTop: '5%', width: '400px', backgroundColor: '#2C5F2DFF' }}>
                <form style={{ marginLeft: '5%' }} onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="noticeNo" defaultValue="" placeholder="Enter Notice Number" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="title" defaultValue="" placeholder="Enter Notice Title" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="shortTitle" defaultValue="" placeholder="Enter short Notice  Title" ref={register} />
                    <br />
                    <select ref={register}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <br />
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="weight" defaultValue="" placeholder="Enter Product weight" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block " name="imageURL" type="file" onChange={handleImageUpload} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="rounded-pill btn-lg btn-block btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNotice;