import React from 'react'
import './pendingList.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useParams, useHistory } from 'react-router-dom';

const columns = [
    { id: 'stt', label: 'STT', minWidth: 40 },
    { id: 'billId', label: 'Bill ID', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 150 },
    { id: 'createdAt', label: 'Created at', minWidth: 150 },
    { id: 'totalPrice', label: 'Total price', minWidth: 150 },
    { id: 'action', label: 'Action', minWidth: 170 },
  ];

function createData(stt, billId, status, createdAt, totalPrice) {
    return {stt, billId, status, createdAt, totalPrice};
}

function PendingList() {
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const history = useHistory();

    React.useEffect(async() => {
        const res = await fetch(`http://localhost:8000/api/v1/bills?status=pending`, {
            method: 'GET'
        });
        const data = await res.json();
        const newRows = data.map((item, id) => {
            return createData(id+1, item.id, item.status, item.createAt, item.totalPrice);
        });
        setRows(newRows);
    },[]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };  

    const handleClickDetail = (id) => {
        history.push(`/admin/bills/pending/${id}`);
    } 

    return (
        <div className="pending-list">
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
                                                        <Button onClick={() => handleClickDetail(row.billId)} color='primary'  variant="outlined">Detail</Button>
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

export default PendingList