import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function EditUser() {

    let  navigate = useNavigate();

    const {id} = useParams();

    const [member, setMember] = useState({
        name:"",
        nic:"",
        email:"",
        gender:"",
        type:"",
    });

    const {name, nic, email, gender, type} = member;

    const onInputChange = (e) =>{
        setMember({...member, [e.target.name]: e.target.value});
    }


    useEffect(()=>{
        loadUser();
    },[])


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/edit/${id}`,member)
        navigate("/display")
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/get/${id}`);
        setMember(result.data);
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                    <h2 className='text-center m-4'>Edit Employees</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input type={"text"} className='form-control'
                                   placeholder='Enter Name'
                                   name='name' value={name} onChange={(e)=>onInputChange(e)}/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="DateOfBirth" className='form-label'>NIC</label>
                            <input type={"text"} className='form-control' placeholder='Enter your NIC name'
                                   name='nic' value={nic} onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Department" className='form-label'>Email</label>
                            <input type={"text"} className='form-control' placeholder='Email'
                                   name='email' value={email} onChange={(e)=>onInputChange(e)}/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Salary" className='form-label'>Gender</label>
                            <input type={"text"} className='form-control' placeholder='Gender'
                                   name='gender' value={gender} onChange={(e)=>onInputChange(e)}/>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="Email" className='form-label'>Type of Membership</label>
                            <input type={"text"} className='form-control' placeholder='Membership type'
                                   name='type' value={type} onChange={(e)=>onInputChange(e)}/>
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/display" >View Members</Link>
                    </form>
                </div>



            </div>
        </div>
    )
}

export default EditUser
