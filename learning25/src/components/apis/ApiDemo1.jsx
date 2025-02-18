import axios from 'axios'
import React, { useState } from 'react'

const ApiDemo1 = () => {

    const [output, setOutput] = useState([]);
   


    const getUserData = async () => {

        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res);
        setOutput(res.data.data)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1> API DEMO 1</h1>
            <button onClick={()=>{getUserData()}}>Click</button>
            {
            output.length>0? 
            (<table className="table table-dark">
               
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>ACTIVE?</th>
                    </tr>
                </thead>
                <tbody>
                    {output?.map((user) => {
                        return (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td> {user.isActive == true ? "YES" : "NO"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>):""
}    
        </div>
    )
}

export default ApiDemo1
