import React from 'react'

const ArrayDemo6 = () => {
    let products = [

        {
            id: 102,
            name: "pants",
            price: "2500",
            discount: 20,
            category: "fashion",
        },
        {
            id: 103,
            name: "Samsung",
            price: "25000",
            discount: 50,
            category: "Electronic",
        },
        {
            id: 104,
            name: "T-shirts",
            price: "1200",
            discount: 60,
            category: "fashion",
        },
        {
            id: 105,
            name: "Air-Conditioner",
            price: "60000",
            discount: 70,
            category: "Home-appliance",
        },
        {
            id: 106,
            name: "Television",
            price: "25000",
            discount: 30,
            category: "electronic",
        },
        {
            id: 107,
            name: "Shirt",
            price: "2500",
            discount: 20,
            category: "fashion",
        },
    ]
    return (

        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "Blue" }}>Array demo 6</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>DISCOUNT</th>
                        <th>CATEGORY</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td style={{color:product.discount >=50 ? "green":" "}}>{product.name}</td>
                                <td>
                                    {product.price}
                                </td>
                                <td>{product.discount}%</td>
                                <td style={{color:product.category=="fashion"?"red ":""}}>
                                    {product.category}
                        
                                </td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default ArrayDemo6
