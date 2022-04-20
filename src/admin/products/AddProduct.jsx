import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './addProduct.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import axios from 'axios';
// import { IKImage, IKContext, IKUpload } from 'imagekitio-react';


const theme = createTheme();

export default function AddProduct() {

    const [category, setCategory] = React.useState(0);
    const [categoryList, setCategoryList] = React.useState([]);
    const [image, setImage] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    const [productName, setProductName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [available, setAvailable] = React.useState(0);
   


    const handleChange = (event) => {
        setCategory(event.target.value);
      };
    const handleSubmit = async(event) => {
        event.preventDefault();
        const formdata = new FormData();
        const XUniqueUploadId = +new Date();
        // console.log(XUniqueUploadId);
  
        formdata.append("file", image);
        formdata.append("cloud_name", "duumrsxxo");
        formdata.append("upload_preset", "product");
        // formdata.append("public_id", "myChunkedFile2");
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.cloudinary.com/v1_1/duumrsxxo/image/upload", false);
        xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
        
        xhr.onload = function () {
          // do something to response
        //   console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          console.log(res.url);
          setImageUrl(res.url);
        };
  
        xhr.send(formdata);

        if (imageUrl != ""){
            console.log(productName);
            await fetch(`http://localhost:8000/api/v1/products/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": 0,
                    "name": productName,
                    price,
                    description,
                    "image": imageUrl,
                    available,
                    "categoryId": category
                })
            })
            .then(res => res.json())
            .then(res => console.log(res)); 
        }
        
    };

    React.useEffect(async() => {
        const res = await fetch(`http://localhost:8000/api/v1/categories`, {
            method: 'GET'
        })
        const data = await res.json();
        setCategoryList(data);
    }, []);

    return (
        <div className='add-product'>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
        
                <Typography component="h1" variant="h5">
                    Add product
                </Typography>
                <Box  sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField
                        autoComplete="given-name"
                        name="productName"
                        onChange={(e) => setProductName(e.target.value)}
                        required
                        fullWidth
                        id="productName"
                        label="Product Name"
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                        onChange = {(e) => setPrice(e.target.value)}
                        type="number"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        name="price"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        onChange = {(e) => setDescription(e.target.value)}
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="description"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        onChange={(e) => setAvailable(e.target.value)}
                        type="number"
                        name="available"
                        label="Available"
                        id="available"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    
                        <Select
                        labelId="category"
                        id="category"
                        value={category}
                        onChange={handleChange}
                        autoWidth
                        label="Category"
                        >
                       
                        {categoryList.map(category => <MenuItem value={category.id}>{category.name}</MenuItem> )}
                     
                        </Select>
                    
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                        required
                        fullWidth
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        name="image"
                        id="image"
                        />
                    </Grid>
                    </Grid>
                        <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Submit
                    </Button>
                    <Grid container justifyContent="flex-end">
                    
                    </Grid>
                </Box>
                </Box>
            </Container>
            </ThemeProvider>
        </div>
    );
}