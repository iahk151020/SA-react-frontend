import React from 'react';
import './pendingBill.css';
import { Grid, Paper, Typography, Button} from '@mui/material';
import {useParams, useHistory} from 'react-router-dom';
import ProductList from '../products/ProductList';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PendingBill() {

    const [billInfo, setBillInfo] = React.useState({});
    const [productList, setProductList] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [confirm, setConfirm] = React.useState(false);
    const paperStyle = {padding: '30px 20px', width:800, margin:"20px auto"};
    const headStyle = {margin:0};
    const {id} = useParams();
    const history = useHistory();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);

    };

    React.useEffect(async() => {
        const res = await fetch(`http://localhost:8000/api/v1/bills/${id}`, {
            method: 'GET'
        });
        const data = await res.json();
        setBillInfo(data);
        setProductList(Array.from(data.productList));
        console.log(productList);
        const customerId = data.customerId;

    }, []);

    const handleConfirm = () => {
        // const res = fetch(`http://localhost:8000/api/v1/bills/${id}`, {})
        // history.push('/admin/bills/pending')
        setMessage('Are sure to confirm this bill?');
        setConfirm(true);
        handleClickOpen();
    }

    const handleCancel = () => {
    //     history.push('/admin/bills/pending')
        setMessage('Are sure to cancel this bill?');
        setConfirm(false);
        handleClickOpen();    
    }

    const handleYes = async() => {
        const status = confirm ? 'confirmed' : 'canceled';
        await fetch(`http://localhost:8000/api/v1/bills/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: status})
        })
        .then(res => {
            if (res.status == 204) {
                history.push('/admin/bills/pending');
            } else console.log("error occured while updating");
        })
    }

  

    return (
        <div className='pending-bill'>
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
                    <Button onClick={handleYes} autoFocus>YES</Button>
                    <Button onClick={handleClose}>NO</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className='card'>
                <Grid>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <Typography variant="h3" component="h2">
                                 Bill Details
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" component="h2">
                                 Bill ID: {billInfo.id}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                 Customer: {billInfo.customerName}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                 Status: {billInfo.status}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                 Created at: {billInfo.createAt}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                 Product list:
                                
                                     {productList.map((product, index) => {
                                         return(
                                             <Typography variant='body2'>
                                                 {index+1}. {product.productName} x {product.quantity}
                                             </Typography>
                                         )
                                     })}
                            </Typography>
                            <Typography variant="body1" component="h2">
                                    Total: {billInfo.totalPrice} VND
                            </Typography>
                        </Grid>
                        <Grid algin='right'>
                            <Button onClick={handleConfirm} variant='contained' color='success'>Confirm</Button>
                            <Button onClick={handleCancel} variant='contained' color='error'>Cancel</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default PendingBill