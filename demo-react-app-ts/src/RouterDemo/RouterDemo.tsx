import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Product } from "./Product";
import { Contact } from "./Contact";
import { Greetings } from "../Greetings/Greetings";

export const RouterDemo = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Router>
                <Link style={{ display: "block" }} to={"/"}>
                    Click for Home
                </Link>
                <Link style={{ display: "block" }} to={"/product"}>
                    Click for Product
                </Link>
                <Link style={{ display: "block" }} to={"/product/green"}>
                    Click for Product Green
                </Link>
                <Link style={{ display: "block" }} to={"/product/blue"}>
                    Click for Product Blue
                </Link>
                <Link style={{ display: "block" }} to={"/contact"}>
                    Click for Contact
                </Link>
                <Link style={{ display: "block" }} to={"/contact/1"}>
                    Click for Contact User 1
                </Link>
                <Link style={{ display: "block" }} to={"/contact/2"}>
                    Click for Contact User 2
                </Link>
                <Link style={{ display: "block" }} to={"/contact/1/greet"}>
                    Click for Contact User 1 Greet
                </Link>
                <Link style={{ display: "block" }} to={"/contact/2/greet"}>
                    Click for Contact User 2 Greet
                </Link>

                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/product" Component={Product} />
                    <Route path="/product/:color" Component={Product} />
                    <Route path="/contact" Component={Contact}>
                        <Route index path=":user" Component={Contact} />
                        <Route index path=":user/greet" Component={() => Greetings({ name: "1", color: "2" })} />
                    </Route>
                </Routes>
            </Router>

            {/* <Home />
            <Product />
            <Contact /> */}
        </div>
    );
};
