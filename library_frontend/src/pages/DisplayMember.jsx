import React, {useEffect, useState} from 'react'
import axios from "axios";


function DisplayMember() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMemebers();
    }, []);

    const loadMemebers = async () => {
        const result = await axios.get("http://localhost:8080/getall");
        setMembers(result.data);
    }

    return (
        <div className="container">
            <div className="py-4 mt-5">
                <table className="table border shadow">
                    <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Member Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((member,index)=>(
                            <tr>
                                <th scope="row" key={index}>{member.id}</th>
                                <td>{member.name}</td>
                                <td>{member.nic}</td>
                                <td>{member.email}</td>
                                <td>{member.gender}</td>
                                <td>{member.type}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">View</button>
                                    <button className="btn btn-warning mx-2">Eidt</button>
                                    <button className="btn btn-danger mx-2">Delete</button>

                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayMember
