import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterBar from "../../components/filterbar/FilterBar";
import { Container } from '@mui/material';
import DropdownButton from '../../components/dropdown/Dropdown';
import ProductCard from '../../components/productcard/ProductCard';
import Pagination from '../../components/pagination/Pagination';
import "./shop.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
const product = {
    "product_name": "Ace X Xmas Edition - 16mg",
    "img": "https://thesnuslife-asset.s3.amazonaws.com/1731682337434_IMG_6121.PNG",
    "price1": 4.99,
    "price2": 5.99,
    "moneytype": 4,
};
function ShopPage() {
    return (
        <Container sx={{ position: 'absolute', background: "transparent" }}>
            <div className="caption">Shop All</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="caption">
                            <h2>Filter By</h2></div>
                    </Grid>
                    <Grid item xs={9} sx={{ textAlign: "right" }}>
                        <div><DropdownButton /></div>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <FilterBar />
                    </Grid>
                    <Grid item xs={9}>
                        <ProductCard product={product}></ProductCard>
                    </Grid>
                </Grid>
                <div className='pagination'>
                    <Pagination></Pagination>
                </div>
            </Box>
        </Container>
    )
}
const colCountByScreen = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
};

export default ShopPage