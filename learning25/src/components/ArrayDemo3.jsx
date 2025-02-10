import React from 'react'

const ArrayDemo3 = () => {

    var Employees = [
        {
            id:1,
            name:"bharat",
            age:21,
            salary:15000,
            gender:"male",
        },
        {
            id:2,
            name:"jagat",
            age:25,
            salary:17000,
            gender:"male",
        },
        {
            id:3,
            name:"rameela",
            age:28,
            salary:25000,
            gender:"female",
        },
        {
            id:4,
            name:"kokila",
            age:29,
            salary:30000,
            gender:"female",
        },
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"Blue"}}>Array demo 3</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody >
                {
                    Employees.map((emp)=>{
                        return<tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ArrayDemo3
