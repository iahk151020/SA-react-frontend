import React from 'react';
import './modifyProduct.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid, Paper, Typography } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import {useParams} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ModifyProduct() {

    const [productInfo, setProductInfo] = React.useState({});

    const paperStyle = {padding: '30px 20px', width:800, margin:"20px auto"};
    const headStyle = {margin:0};
    const {id} = useParams();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
        console.log(res);
        if (res.status == 204) {
            setMessage('updated successfully!!!');
            setOpen(true);
        } else {
            setMessage('An error occurred while updating product.');
            setOpen(true);
        }
    }

    return (
        <div className="modifyProduct">
            <div className="dialog">
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Alert"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} autoFocus>OK</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div>
                <Grid>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Typography style={headStyle} variant='h4'>Product information</Typography>
                            <img className='product-img' src={productInfo.image}/>
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
        </div>
    )
}

export default ModifyProduct