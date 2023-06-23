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
    createData('Normal', 'N/A', 'N/A', '24%', '24%', '22%', '22%', '20%', '20%'),
    createData('Emergency', 'N/A', 'N/A', '29%', '29%',	'27%', '26%', '26%', '25%'),
    createData('Rate', 'N/A', 'N/A', '6.5%', '6.5%', '6%', '5%', '4.5%', '4.5%'),
    createData('Duration', 'N/A', 'N/A', '15 years', '15 years', '20 years', '20 years', '20 years', '30 years'),
];

export default function Mortgage() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Mortgage Loans</strong></p>
                <p>
                    Bitloanscapital offers mortgage loans to individuals seeking financing for real estate purchases or property investments. Our mortgage loans provide the necessary capital to support your homeownership dreams or real estate ventures. With flexible loan amounts and competitive interest rates, our mortgage loans are designed to make property ownership more accessible and affordable.
                    Loan Amounts:
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