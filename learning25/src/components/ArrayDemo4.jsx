import React from 'react'

const ArrayDemo4 = () => {

    var Employees = [
        {
            id:1,
            name:"Bharat",
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
            name:"Bharti",
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
        <h1 style={{color:"Blue"}}>Array demo 4</h1>
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
                            <td style={{color:emp.name.startsWith("B")?"red":"grey"}}>{emp.name}</td>
                                <td >
                                     {emp.age}
                                <span>
                                    {emp.age>25?"please retire" : " "}
                                </span>
                            </td>
                            <td style={{backgroundColor:emp.salary>15000? "green":"none"}}>{emp.salary}</td>
                            <td>
                                <span style={{color:emp.gender=="male"? "blue":"Pink"}}>{emp.gender}</span>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ArrayDemo4
