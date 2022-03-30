import React from 'react'
import './manageCategory.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const columns = [
    { id: 'stt', label: 'STT', minWidth: 170 },
    { id: 'categoryName', label: 'Category name', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 }
  ];

function createData(stt, categoryName) {
    return {stt, categoryName};
  }

function ManageCategory() {

    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const [change, setChange] = React.useState(false);
    const [add, setAdd] = React.useState('');
    const [maxId, setMaxId] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };  

    const handleDelete = async(row) => {
        const res = await fetch(`http://localhost:8000/api/v1/categories/${row.categoryName}`, {
            method: 'DELETE',
        })
        if (res.status == 204){
            let newRows = rows.filter(item => item.categoryName !== row.categoryName);
            setRows(newRows);
            if (rows.length == 0){
                setMaxId(0);
            }
        } else {
            setMessage('Delete failed');
            setOpen(true);
        }
    }

    const handleAdd = async() => {
        let newRows = [...rows];
        const res = await fetch(`http://localhost:8000/api/v1/categories/add`,{
            method: 'POST',
            header:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": (maxId + 1),
                "name": add
            })
        });
        
        if (res.status === 201) {
            setMaxId(maxId + 1);
            newRows.push(createData(newRows.length + 1, add));
            setRows(newRows);
        } else {
            setMessage("An error occurred while adding new category.");
            setOpen(true)
        }
    }

    const handleInputChange = (e) => {
        setAdd(e.target.value);
    }
    
    React.useEffect(async () => {
        fetch(`http://localhost:8000/api/v1/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(resJson => {
            resJson.forEach(item => {
                if (item.id > maxId) {
                    setMaxId(item.id);
                }
            })
            let newData = resJson.map((item, id) => createData(id + 1, item.name));
            setRows(newData);
        });        
    }, []);

    return (
        <div className='manageCategory'>
            <div className="dialog">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"ERROR"}
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

            <div className="addCategory">
                <Input onChange={handleInputChange} placeholder="Category name" />
                <Button onClick={handleAdd} variant='outlined'>Add</Button>
            </div>

            <br/>
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
                                return (
                                
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                        {columns.map((column) => {
                                            if (column.id == 'action'){
                                                return (
                                                    <TableCell>
                                                        <Button color='error' onClick={() => handleDelete(row)} variant="outlined">Delete</Button>
                                                    </TableCell>
                                                )
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

export default ManageCategory
