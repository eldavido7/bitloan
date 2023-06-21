import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

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

                </p>
            </MDBContainer>
        </div>
    );
};