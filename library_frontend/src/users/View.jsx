import React, {useState,useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function View() {

    const [member, setMember] = useState({
        name:"",
        nic:"",
        email:"",
        gender:"",
        type:"",
    });

    const {id} = useParams();

    useEffect(() => {
       loadMember();
    }, []);

    const loadMember = async () => {
        const result = await axios.get(`http://localhost:8080/get/${id}`);
        setMember(result.data);
    }


    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
                    <h2 className='text-center m-4'>View Member</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Name:
                                   <b> {member.name}</b>
                                </li>
                                <li className="list-group-item">
                                    NIC:
                                    <b>{member.nic}</b>
                                </li>
                                <li className="list-group-item">
                                   Email:
                                <b>{member.email}</b>
                                </li>
                                <li className="list-group-item">
                                    Gender:
                                <b> {member.gender} </b>
                                </li>
                                <li className="list-group-item">
                                    Membership Type:
                                <b>  {member.type} </b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-success mt-2" to={"/display"}>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default View
