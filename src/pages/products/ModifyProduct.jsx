import React from 'react';
import './modifyProduct.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, Paper, Typography } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import {useParams} from 'react-router-dom';

function ModifyProduct() {

    const [productInfo, setProductInfo] = React.useState({});

    const paperStyle = {padding: '30px 20px', width:800, margin:"20px auto"};
    const headStyle = {margin:0};
    const {id} = useParams();

    React.useEffect(async() => {
        const res = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
            method: 'GET'
        })
        const data = await res.json();
        setProductInfo(data);
        console.log(productInfo);

    }, [])

    const changeName = (e) => {
        setProductInfo({...productInfo, name: e.target.value});
    }

    const changeDes = (e) => {
        setProductInfo({...productInfo, description: e.target.value});
    }

    const changeAvai = (e) => {
        setProductInfo({...productInfo, available: e.target.value});
    }

    const changePrice = (e) => {
        setProductInfo({...productInfo, price: e.target.value});
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        const data = await res.json();
        if (res.status == 204) {
            alert("Product updated successfully");
        }
    }

    return (
        <div className="modifyProduct">
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Typography style={headStyle} variant='h4'>Product information</Typography>
                        <img className='product-img' src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/936943183.jpeg"/>
                    </Grid>
                    
                        <FormLabel color='error'>Product information</FormLabel>
                        <TextField fullWidth value={productInfo.name} onChange={changeName} size='small' margin="normal"/>
                        <FormLabel color='error'>Description</FormLabel>
                        <TextField fullWidth  value={productInfo.description} onChange={changeDes} size='small' margin="normal"/>
                        <FormLabel color='error'>Available</FormLabel>
                        <TextField type='number' fullWidth  value={productInfo.available} onChange={changeAvai} size='small' margin="normal"/>
                        <FormLabel color='error'>Price</FormLabel>
                        <TextField type='number' fullWidth  value={productInfo.price} onChange={changePrice} size='small' margin="normal"/>
                        <Button type='submit' onClick={handleSubmit} variant='contained' color='secondary'>Update</Button>
                    
                </Paper>
            </Grid>
        </div>
    )
}

export default ModifyProduct