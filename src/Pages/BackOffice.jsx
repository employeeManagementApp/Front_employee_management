import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const BackOffice = ()=>{
    const [data, setData] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl);
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(`${baseUrl}/user/all`);
            setData(response.data)
        }
        fetchData();
    }, [])
    console.log(data);
    return(
        <div>
            <h2>Back Office</h2>
            <div>
                {data.map((user)=>(
                    <p key={user.id}>
                        {user.firstname}
                        <p>{user.lastname}</p>
                        <p>{user.email}</p>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default BackOffice