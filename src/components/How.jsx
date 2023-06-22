import React from 'react'
import {
    MDBContainer,
} from "mdb-react-ui-kit";

export default function How() {
    return (
        <div>
            <MDBContainer>
                <section>
                    <br></br>
                    <br></br>
                    <p className="text-center mb-5" style={{ fontSize: '1.7vw' }}>
                        Welcome to Bitloanscapital! We've made the lending and borrowing process simple and secure. Here's a step-by-step guide on how it works:
                    </p>

                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">How It Works</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <section id='extra'>
                        <div className="container my-5 py-5" >
                            <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-users me-2" style={{ color: '#07425b' }}></i> 1. Account Creation </h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	Visit the Bitloanscapital website and click on the "Sign Up" button.
                                        <br></br>•	Fill in the required information to create your account, including username, email address, and password.
                                        <br></br>•	Agree to the Terms of Service and Privacy Policy.
                                        <br></br>•	Complete the account verification process, if applicable, to unlock all features.
                                    </p></h3>
                                </div>
                            </div>

                            <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-credit-card me-2" style={{ color: '#07425b' }}></i> 2. Account Funding </h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	After creating your account, you will be assigned a Bitloanscapital wallet address.
                                        <br></br>•	Deposit funds into your wallet by sending Bitcoin to the provided wallet address.
                                        <br></br>•	Wait for the required confirmations for the deposit to be processed.
                                    </p></h3>
                                </div>
                            </div>

                            <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-spinner me-2" style={{ color: '#07425b' }}></i> 3. Borrowing Process </h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	Once your account is funded, you can choose to borrow funds by providing collateral.
                                        <br></br>•	Select the loan category that fits your needs, such as Student, Medical, Mortgage, or Standard loans.
                                        <br></br>•	Review the loan amounts, interest rates, and collateral requirements for each loan category.
                                        <br></br>•	Complete the Know Your Customer (KYC) process, if applicable, to verify your identity and eligibility as a borrower.
                                        <br></br>•	Choose between a Normal Loan or an Emergency Loan. Note that for Normal Loans, the collateral needs to remain in your wallet for at least two months, whereas Emergency Loans are disbursed immediately.
                                    </p></h3>
                                </div>
                            </div>

                            <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-circle-o-notch me-2" style={{ color: '#07425b' }}></i>4. Lending Process</h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	If you prefer to lend your funds and earn interest, select the lending option.
                                        <br></br>•	Specify the amount you wish to lend from your Bitloanscapital wallet.
                                        <br></br>•	Confirm your lending selection and proceed.
                                        <br></br>•	Your funds will be added to the lending pool, contributing to the available funds for borrowers.
                                    </p></h3>
                                </div>
                            </div>

                            <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-credit-card-alt me-2" style={{ color: '#07425b' }}></i>5. Deposit and Withdrawal</h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	Deposits: To add more funds to your Bitloanscapital wallet, simply send additional Bitcoin to your wallet address.
                                        <br></br>•	Withdrawals: If you need to withdraw your funds, navigate to the withdrawal section in your account. You can initiate a
                                        withdrawal request, and the funds will be sent to your designated Bitcoin address. Please note that withdrawal processing time
                                        may vary depending on blockchain confirmations.
                                    </p></h3>
                                </div>
                            </div>

                            <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-handshake-o me-2" style={{ color: '#07425b' }}></i>6. Repayment and Interest</h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        •	Borrowers are responsible for repaying their loans within the agreed-upon terms.
                                        <br></br>•	Interest rates will be applied to the loan amount, and borrowers will be provided with a repayment schedule.
                                        <br></br>•	Lenders will earn interest on their lent funds, and the interest will be disbursed according to the lending terms.
                                    </p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                    <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                                <div className="col-12">
                                    <h1 className="display-6 text-left mb-4"><i className="fa fa-credit-card-alt me-2" style={{ color: '#07425b' }}></i>Disclaimer</h1>
                                    <h3 className="display-8 text-left mb-4"><p>
                                        Please remember to carefully read and understand the terms and conditions, as well as any specific guidelines provided by Bitloanscapital, before engaging
                                        in any lending or borrowing activities. If you have any further questions, our customer support team is here to assist you.
                                        <br></br>Disclaimer: The lending and borrowing activities involve financial risks. It is important to consider the risks and consult with financial professionals
                                        before making any investment decisions.
                                    </p></h3>
                                </div>
                            </div>
                    </section>
                </section>
            </MDBContainer>
        </div>
    )
}
