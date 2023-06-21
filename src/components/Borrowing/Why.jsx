import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

export default function Why() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Why Choose Bitloanscapital for Borrowing Needs?</strong></p>
                    <p>
                        •	Competitive interest rates: Our interest rates are carefully calculated to provide borrowers with affordable repayment options and attractive returns for lenders.
                        <br></br>•	Flexible loan amounts: We offer a wide range of loan amounts to accommodate different financial needs, ensuring you can access the funds you require.
                        <br></br>•	Secure and private: We prioritize the privacy and security of our clients, implementing robust measures to safeguard sensitive information and transactions.
                        <br></br>•	Streamlined application process: Our borrowing process is designed to be straightforward and hassle-free, allowing you to submit your loan application with ease.
                        <br></br>•	Dedicated customer support: Our experienced customer support team is available to assist you throughout the borrowing journey, addressing any questions or concerns you may have.

                    </p>
            </MDBContainer>
        </div>
    );
};