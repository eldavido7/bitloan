import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

export default function Medical() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Medical Loans</strong></p>
                <p>
                    At Bitloanscapital, we understand that unexpected medical expenses can place a financial burden on individuals and families. Our medical loan category aims to provide financial support for medical treatments, procedures, surgeries, or any other healthcare-related needs. With our medical loans, you can access the necessary funds quickly and efficiently, allowing you to focus on your health and well-being.
                    Loan Amounts:
                    <br></br>•	$8,000 to $50,000
                    <br></br>•	$50,000 to $100,000
                    <br></br>•	$100,000 to $500,000
                    <br></br>•	$500,000 to $1,000,000
                    <br></br>•	$1,000,000 to $5,000,000
                    <br></br>•	$5,000,000 to $10,000,000
                    <br></br>Interest Rates:
                    <br></br>•	Competitive rates based on the loan amount and collateral
                    <br></br>Collateral Requirements:
                    <br></br>•	Collateral is required based on the loan amount

                </p>
            </MDBContainer>
        </div>
    );
};