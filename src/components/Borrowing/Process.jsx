import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

export default function Process() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Borrowing Process</strong></p>
                <p>
                    At Bitloanscapital, we aim to make the borrowing process seamless and efficient. Here is an overview of how our borrowing process works:
                    <br></br>i.	Eligibility and KYC Verification:
                    <br></br>•	Ensure you meet the minimum age requirement and comply with the regulations of your territory.
                    <br></br>•	Complete the KYC verification process to verify your identity and ensure compliance with legal requirements.
                    <br></br>ii.	Loan Application:
                    <br></br>•	Fill out the loan application form, providing accurate information about your loan requirements and personal details.
                    <br></br>•	Submit any necessary documentation as requested to support your loan application.
                    <br></br>iii.	Loan Approval and Collateral Assessment:
                    <br></br>•	Our team reviews your loan application and collateral details to determine the loan eligibility and the loan amount you qualify for.
                    <br></br>•	A collateral assessment is conducted to evaluate the value and eligibility of the proposed collateral.
                    <br></br>iv.	Loan Disbursement:
                    <br></br>•	Once your loan is approved, the funds will be disbursed to your designated wallet or bank account.
                    <br></br>•	The speed of fund delivery depends on the blockchain.

                </p>
            </MDBContainer>
        </div>
    );
};