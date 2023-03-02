import React, { useState } from 'react'
import axios from "axios"
import FileBase64 from 'react-file-base64';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Nbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';

// toast.configure()

function FoodDetailsForm() {

    const [item, setItem] = useState({ foodName: '', image: '', desc: '', price: ' ' });
    const successNotify = () => toast.success("Successfully Submitted!");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(item)
        axios({
            method: 'post',
            url: 'http://localhost:5001/upload',
            //url: "https://flora-host.herokuapp.com/upload",
            data: item //formData
        })
    }

    return (
        <>
            <Nbar />
            <div className="create">
                <h2>Add a New Food</h2>
                <div className="card p-5" style={{ margin: "50px 1%", border: "2px solid red", borderRadius: "1.5rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit} action="/FoodAdded" >
                            <label className="form-label">Product Name:</label>
                            <input type="text" className="form-control" required
                                onChange={e => setItem({ ...item, foodName: e.target.value })}
                            />
                            <label className="form-label">Attach Image</label>
                            <FileBase64
                                type="file" required
                                multiple={false}
                                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                            />
                            <label className="form-label">Description:</label>
                            <input type="text" className="form-label" placeholder='main Ingredients'
                                onChange={e => setItem({ ...item, desc: e.target.value })}
                            />
                            <label className="form-label">Product Price:</label>
                            <input type="text" className="form-control" placeholder='in Rupees' required
                                onChange={e => setItem({ ...item, price: e.target.value })}
                            />
                            <button className="card__btn" onClick={successNotify}>SUBMIT</button>
                            <Addadmin />
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function Addadmin() {
    const navigate = useNavigate();
    const navigateToLogin = () => {

        navigate('/SignUp');
    };

    return (
        <form >
            <button onClick={navigateToLogin} className="card__btn">ADD NEW ADMIN</button>
        </form>)
}

export default FoodDetailsForm