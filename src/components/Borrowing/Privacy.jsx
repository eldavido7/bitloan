import React from 'react';
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Sidebar';

export default function Privacy() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}></div>
            <MDBContainer>
                <br></br>
                <p><strong>Privacy and Security</strong></p>
                    <p>At Bitloanscapital, we take privacy and security seriously. We have implemented advanced encryption protocols and robust security measures to protect the
                        personal and financial information of our clients. Our platform ensures that sensitive data is stored securely and that transactions are conducted in a
                        safe and private environment. We are committed to maintaining the confidentiality and integrity of client information, providing you with a secure borrowing
                        experience.</p>
            </MDBContainer>
        </div>
    );
};