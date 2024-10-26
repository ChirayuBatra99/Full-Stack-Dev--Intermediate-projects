import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);
    
    useEffect(() => {
        if(deleted)
            setDeleted(false);
        axios.get('/students').then((res) =>{
            setData(res);
        })
        .catch((err) => console.log(err));
    }, [deleted])

  return (
    <div>
        <h3>Students</h3>
        <Link to='/create'>Add student</Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student) =>{
                        return(<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home
