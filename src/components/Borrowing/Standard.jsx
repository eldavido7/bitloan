import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

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

                </p>
            </MDBContainer>
        </div>
    );
};