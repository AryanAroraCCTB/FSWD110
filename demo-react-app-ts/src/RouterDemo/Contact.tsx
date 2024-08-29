import React from "react";
import { useParams } from "react-router-dom";
import { Greetings } from "../Greetings/Greetings";

export const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>

            <h3>Our Team</h3>

            <Greetings name={useParams().user ?? ""} color="green" />

            <div style={{ border: "1px solid grey", padding: "10px" }} className="our-team">
                <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }} className="member">
                    <h5>Alice</h5>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo ad, tempore dolore nulla repudiandae eveniet, reiciendis
                        deserunt expedita eum quas reprehenderit? Facilis autem minus fugiat distinctio porro? Ipsa, a!
                    </p>
                </div>

                <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }} className="member">
                    <h5>Bob</h5>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo ad, tempore dolore nulla repudiandae eveniet, reiciendis
                        deserunt expedita eum quas reprehenderit? Facilis autem minus fugiat distinctio porro? Ipsa, a!
                    </p>
                </div>

                <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }} className="member">
                    <h5>Cam</h5>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quo ad, tempore dolore nulla repudiandae eveniet, reiciendis
                        deserunt expedita eum quas reprehenderit? Facilis autem minus fugiat distinctio porro? Ipsa, a!
                    </p>
                </div>
            </div>
        </div>
    );
};
