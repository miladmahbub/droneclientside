import React, { useState, useEffect } from 'react';
import useAuth from './../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Reviews from '../../Home/Reviews/Reviews';

const Appointsments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `http://localhost:4400/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date])
    return (
        <div>
            <Reviews></Reviews>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointsments;