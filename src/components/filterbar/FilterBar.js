import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import RangeSlider from "../rangeslider/rangeslider";
import "./FilterBar.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
const brands = ['ALL', 'Bundle Deals', 'Accessories', 'Apparel', '77', 'Ace'];
const price = [];
const flavors = ["ALL", "American", "Apple", " Apple Lemon Pineapple"];
const pots = ["ALL", "5", "10"];
const producttypes = ["ALL", "Caffeine", "Killa Cold Mint"];
const clearfilterx = [];

var selected;
const handleClick = (event) => {
    selected = event.target.id;
    console.log(event.target);
    let value = event.target.value;
    let category = selected;
    let query = (selected === "ALL") ? "" : category;
    let url = "http://localhost:5000/products?" + "category=" + query;
    axios.get(url)
        .then(response => console.log("success"))
        .catch(error => console.error('Error fetching data:', error));

}
export default function FilterBar() {
    [selected] = useState("");
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="brands">
                    <Accordion.Header className="header">
                        Brands
                    </Accordion.Header>
                    {brands.map((brand, index) => {
                        return (<Accordion.Body
                            id={brand}
                            className={(selected == brand) ? "body-selected" : "body"}
                            onClick={handleClick}
                            key={index}
                            value={brand}>
                            {brand}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="price">
                    <Accordion.Header className="header">
                        Price
                    </Accordion.Header>
                    <Accordion.Body className="body">
                        <RangeSlider sx={{ width: 30 }}
                        >
                        </RangeSlider>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="header">
                        Flavors
                    </Accordion.Header>
                    {flavors.map((flavor, index) => {
                        return (<Accordion.Body className="body"
                            key={index}
                            id={flavor}>
                            {flavor}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="pots">
                    <Accordion.Header className="header">
                        Pots
                    </Accordion.Header>
                    {pots.map((pot, index) => {
                        return (<Accordion.Body className="body"
                            key={index}
                            id={pot}>
                            {pot}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="producttypes">
                    <Accordion.Header className="header">
                        Product Types
                    </Accordion.Header>
                    {producttypes.map((product_type, index) => {
                        return (<Accordion.Body
                            className="body" key={index}
                            id={product_type}>
                            {product_type}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="clearfilterx" sx={{ textAlign: "left" }}>
                    <Button sx={{ width: "100%", textAlign: "left" }} variant="text" color="default">Clear Filter
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</Button>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}