import React from 'react'
import './productList.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';

const columns = [
    { id: 'stt', label: 'STT', minWidth: 40 },
    { id: 'name', label: 'Product name', minWidth: 130 },
    { id: 'image', label: 'Image', minWidth: 130 },
    { id: 'des', label: 'Description', minWidth: 100 },
    { id: 'available', label: 'Available', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 130 }
  ];

function createData(stt, name, image, des, available, price, id) {
    return {stt, name, image, des, available, price, id};
}


function ProductList() {

    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const history = useHistory();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };  
    
    const handleModify = (id) => {
        history.push(`/admin/products/${id}`);
    }

    React.useEffect(() => {
        fetch(`http://localhost:8000/api/v1/products`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let newRows = data.map((item, id) => createData(id+1, item.name, item.image, item.description, item.available, item.price, item.id));
            setRows(newRows);
        })
    }, [])

    return (
        <div className='product-list'>
            <div className="table">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                console.log(row);
                                return (
                                
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                        {columns.map((column) => {
                                            if (column.id == 'image'){
                                                return (
                                                    <TableCell>
                                                        <img className='product-img1' src={row.image}/>
                                                    </TableCell>
                                                )
                                            } else if (column.id == 'action'){
                                                return (
                                                    <TableCell>
                                                        <Button color='error' variant="outlined">Delete</Button>
                                                        <Button onClick={() => handleModify(row.id)} color='primary' variant="outlined">Modify</Button>
                                                    </TableCell>
                                                );
                                            } else {
                                                const value = row[column.id];
                                                return (    
                                                        <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                        </TableCell>                                      
                                                );
                                            }
                                        })}
                                        
                                    </TableRow>
                                
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default ProductList