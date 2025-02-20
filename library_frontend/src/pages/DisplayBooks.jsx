import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

function DisplayBooks() {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async ()=>{
        const result = await axios.get("http://localhost:8080/getAllBooks");
        setBooks(result.data);

    }


    return (

        <div className="container">
            <div className="py-4 mt-5">
                <table className="table border shadow">
                    <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Of the Book</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book,index) => (
                        <tr>
                            <th scope="row" key={index}>{book.id}</th>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.category}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={"/"}>View</Link>
                                <Link className="btn btn-warning mx-2" to={"/"}>Eidt</Link>
                                <Link className="btn btn-danger mx-2" to={"/"}>Delete</Link>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayBooks
