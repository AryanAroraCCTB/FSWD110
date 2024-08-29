import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
    // let productColor = useParams().color ?? "red";
    const [productColor, setProductColor] = useState(useParams().color ?? "red");

    let newColor = useParams().color;
    useEffect(() => {
        setProductColor(newColor ?? "red");
    }, [newColor]);

    const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductColor(event.target.value);
    };

    return (
        <div>
            <h1>Products</h1>

            <input type="color" onChange={handleChangeColor} />

            <h3>Sale Products</h3>
            <div style={{ border: "1px solid grey", padding: "10px" }} className="sale-products">
                <div style={{ border: `3px solid ${productColor}`, padding: "10px", margin: "10px" }} className="product">
                    <h5>Product Name</h5>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates veniam labore voluptas necessitatibus hic velit quisquam
                        ut dolorem fugiat quod praesentium, explicabo nobis rerum accusantium. Assumenda quas fuga enim repudiandae.
                    </p>
                    <hr />
                    <div>
                        <p>Quantity Remaining: </p>
                        <p className="quantity">11</p>
                    </div>
                </div>

                <div style={{ border: `3px solid ${productColor}`, padding: "10px", margin: "10px" }} className="product">
                    <h5>Product Name</h5>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates veniam labore voluptas necessitatibus hic velit quisquam
                        ut dolorem fugiat quod praesentium, explicabo nobis rerum accusantium. Assumenda quas fuga enim repudiandae.
                    </p>
                    <hr />
                    <div>
                        <p>Quantity Remaining: </p>
                        <p className="quantity">15</p>
                    </div>
                </div>

                <div style={{ border: `3px solid ${productColor}`, padding: "10px", margin: "10px" }} className="product">
                    <h5>Product Name</h5>
                    <hr />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates veniam labore voluptas necessitatibus hic velit quisquam
                        ut dolorem fugiat quod praesentium, explicabo nobis rerum accusantium. Assumenda quas fuga enim repudiandae.
                    </p>
                    <hr />
                    <div>
                        <p>Quantity Remaining: </p>
                        <p className="quantity">20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
