import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#07425b',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, lite, standardlite, standardlitemini, mediumlite, medium, premiumlite, premiummini, ultimate) {
    return { name, lite, standardlite, standardlitemini, mediumlite, medium, premiumlite, premiummini, ultimate };
}

const rows = [
    createData('Collateral'),
    createData('Normal', '$8000', '16%', '15.50%', '15%', '13%', '12%', '11%', '10%'),
    createData('Emergency', '$10,000', '20%', '20%', '19%',	'18%', '17%', '16%', '16%'),
    createData('Rate', '18%', '18%', '18%',	'17%', '16%', '16%', '15%', '15%'),
    createData('Duration', '2 years', '2 years', '3 years',	'4 years', '5 years', '6 years', '8 years',	'10 years'),
];

export default function Standard() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Standard Loans</strong></p>
                <p>
                    Our standard loan category caters to individuals in need of financial assistance for various purposes, such as debt consolidation, home improvements, business investments, or personal expenses. With flexible loan amounts and terms, our standard loans offer a versatile solution to address your financial requirements.
                    Loan Amounts:
                    <br></br>•	$8,000 to $50,000
                    <br></br>•	$50,000 to $100,000
                    <br></br>•	$100,000 to $500,000
                    <br></br>•	$500,000 to $1,000,000
                    <br></br>•	$1,000,000 to $5,000,000
                    <br></br>•	$5,000,000 to $10,000,000
                    <br></br>•	$10,000,000 to $50,000,000
                    <br></br>•	$50,000,000 to $100,000,000
                    <br></br>Interest Rates:
                    <br></br>•	Competitive rates based on the loan amount and collateral
                    <br></br>Collateral Requirements:
                    <br></br>•	Collateral is required based on the loan amount
                    <br></br>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Standard</StyledTableCell>
                                    <StyledTableCell align="center">$8k-$50k</StyledTableCell>
                                    <StyledTableCell align="center">$50k-$100k</StyledTableCell>
                                    <StyledTableCell align="center">$100k-$500k</StyledTableCell>
                                    <StyledTableCell align="center">$500k-$1M</StyledTableCell>
                                    <StyledTableCell align="center">$1M-$5M</StyledTableCell>
                                    <StyledTableCell align="center">$5M-$10M</StyledTableCell>
                                    <StyledTableCell align="center">$10M-$50M</StyledTableCell>
                                    <StyledTableCell align="center">$50M-$100M</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.lite}</StyledTableCell>
                                        <StyledTableCell align="center">{row.standardlite}</StyledTableCell>
                                        <StyledTableCell align="center">{row.standardlitemini}</StyledTableCell>
                                        <StyledTableCell align="center">{row.mediumlite}</StyledTableCell>
                                        <StyledTableCell align="center">{row.medium}</StyledTableCell>
                                        <StyledTableCell align="center">{row.premiumlite}</StyledTableCell>
                                        <StyledTableCell align="center">{row.premiummini}</StyledTableCell>
                                        <StyledTableCell align="center">{row.ultimate}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br></br>
                    <br></br>
                </p>
            </MDBContainer>
        </div>
    );
};