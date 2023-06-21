import React from 'react'
import {
    MDBContainer,
} from "mdb-react-ui-kit";
import Sidebar from './Borrowing/Sidebar';

export default function Borrow() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <MDBContainer>
                    <br></br>
                    <p><strong>Student Loans</strong></p>
                    <p>
                        Our student loan category is specifically tailored to support individuals pursuing higher education. We understand the rising costs of education and the financial challenges students face. With our student loans, you can access the funds you need to cover tuition fees, books, living expenses, or any other educational requirements. Our student loans offer flexible repayment terms, competitive interest rates, and collateral options that make financing your education more manageable.
                        Loan Amounts:
                        <br></br>•	$8,000 to $50,000
                        <br></br>•	$50,000 to $100,000
                        <br></br>•	$100,000 to $500,000
                        <br></br>Interest Rates:
                        <br></br>•	Competitive rates based on the loan amount and collateral
                        <br></br>Collateral Requirements:
                        <br></br>•	Collateral is required based on the loan amount

                    </p>
                </MDBContainer>
            </div>
        </div>
    )
}
