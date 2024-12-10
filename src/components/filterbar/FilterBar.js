import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import RangeSlider from "../rangeslider/rangeslider";
import "./FilterBar.css";
import { Button } from "@mui/material";
const brands = ['ALL', 'Bundle Deals', 'Accessories', 'Apparel', '77', 'Ace'];
const price = [];
const flavors = ["ALL", "American", "Apple", " Apple Lemon Pineapple"];
const pots = ["ALL", "5", "10"];
const producttypes = ["ALL", "Caffeine", "Killa Cold Mint"];
const clearfilterx = [];

const select = (event) => {
    console.log(event.target.value);
}
export default function FilterBar() {
    const [selected, select] = useState(0);
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="brands">
                    <Accordion.Header className="header">
                        Brands
                    </Accordion.Header>
                    {brands.map((product, index) => {
                        return (<Accordion.Body
                            className="body"
                            onClick={select}
                            key={index}>
                            {product}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="price">
                    <Accordion.Header className="header">
                        Price
                    </Accordion.Header>
                    <Accordion.Body className="body">
                        <RangeSlider sx={{ width: 30 }}>

                        </RangeSlider>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="header">
                        Flavors
                    </Accordion.Header>
                    {flavors.map((product, index) => {
                        return (<Accordion.Body className="body"
                            key={index}>
                            {product}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="pots">
                    <Accordion.Header className="header">
                        Pots
                    </Accordion.Header>
                    {pots.map((product, index) => {
                        return (<Accordion.Body className="body"
                            key={index}>
                            {product}
                        </Accordion.Body>);
                    })}
                </Accordion.Item>
                <Accordion.Item eventKey="producttypes">
                    <Accordion.Header className="header">
                        Product Types
                    </Accordion.Header>
                    {producttypes.map((product, index) => {
                        return (<Accordion.Body
                            className="body" key={index}>
                            {product}
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