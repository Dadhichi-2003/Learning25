import React from "react";

const ArrayDemo5 = () => {
    let players = [
        {
            id: 1,
            name: "sachin",
            score: "100",
            gender: "male",
            age: "45",
            isActive: false,
        },
        {
            id: 2,
            name: "rohit",
            score: "99",
            gender: "male",
            age: "35",
            isActive: true,
        },
        {
            id: 3,
            name: "virat",
            score: "11",
            gender: "male",
            age: "22",
            isActive: true,
        },
        {
            id: 4,
            name: "smriti",
            score: "60",
            gender: "female",
            age: "25",
            isActive: true,
        },
        {
            id: 5,
            name: "Amrit",
            score: "120",
            gender: "female",
            age: "26",
            isActive: false,
        },
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "Blue" }}>Array demo 5</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SCORE</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                        <th>ACTIVE?</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return (
                            <tr>
                                <td>{player.id}</td>
                                <td>{player.name}</td>
                                <td
                                    style={{ color: player.score >= 100 ? "darkgreen" : "white" }}
                                >
                                    {player.score}
                                </td>
                                <td>{player.gender}</td>
                                <td style={{ color: player.age >= 30 ? "yellow" : "" }}>
                                    {player.age}
                                    <span>
                                        {player.age >= 35 && player.isActive == true
                                            ? "  Please Retire  "
                                            : " "}
                                    </span>
                                </td>
                                <td> {player.isActive == true ? "YES" : "NO"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ArrayDemo5;
