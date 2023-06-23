import { React, useState } from 'react';

export default function Home() {
    const [loanCategory, setLoanCategory] = useState('');
    const [loanType, setLoanType] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [monthlyRepayments, setMonthlyRepayments] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);
    const [loanPeriod, setLoanPeriod] = useState(0);
    const [totalCollateral, setTotalCollateral] = useState(null);

    const handleLoanCategoryChange = (event) => {
        setLoanCategory(event.target.value);
    };

    const handleLoanTypeChange = (event) => {
        setLoanType(event.target.value);
    };

    const handleLoanAmountChange = (event) => {
        const value = event.target.value;
        // Only allow positive numbers
        if (value >= 0) {
            setLoanAmount(value);
        }
    };

    const calculateLoanDetails = () => {
        if (!loanCategory || !loanType || !loanAmount) {
            alert('Please select loan category, loan type, and enter loan amount.');
            return;
        }

        // Validate loan amount
        if (loanAmount < 0) {
            alert('Loan amount must be a positive number.');
            return;
        }

        let interestRate = 0;
        let collateralRate = 0;
        let loanPeriod = 0;

        if (loanCategory === 'standard') {
            if (loanAmount >= 0 && loanAmount <= 7999) {
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                loanPeriod = 2;
            } else if (loanAmount >= 50000 && loanAmount <= 100000) {
                loanPeriod = 2;
            } else if (loanAmount >= 100000 && loanAmount <= 500000) {
                loanPeriod = 3;
            } else if (loanAmount >= 500000 && loanAmount <= 1000000) {
                loanPeriod = 4;
            } else if (loanAmount >= 1000000 && loanAmount <= 5000000) {
                loanPeriod = 5;
            } else if (loanAmount >= 5000000 && loanAmount <= 10000000) {
                loanPeriod = 6;
            } else if (loanAmount >= 10000000 && loanAmount <= 50000000) {
                loanPeriod = 8;
            } else if (loanAmount >= 50000000 && loanAmount <= 100000000) {
                loanPeriod = 10;
            }
        } else if (loanCategory === 'mortgage') {
            if (loanAmount >= 0 && loanAmount <= 99999) {
                loanPeriod = 0;
            } else if (loanAmount >= 100000 && loanAmount <= 500000) {
                loanPeriod = 15;
            } else if (loanAmount >= 500000 && loanAmount <= 1000000) {
                loanPeriod = 15;
            } else if (loanAmount >= 1000000 && loanAmount <= 5000000) {
                loanPeriod = 20;
            } else if (loanAmount >= 5000000 && loanAmount <= 10000000) {
                loanPeriod = 20;
            } else if (loanAmount >= 10000000 && loanAmount <= 50000000) {
                loanPeriod = 20;
            } else if (loanAmount >= 50000000 && loanAmount <= 100000000) {
                loanPeriod = 30;
            }
        } else if (loanCategory === 'student') {
            if (loanAmount >= 0 && loanAmount <= 7999) {
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                loanPeriod = 10;
            } else if (loanAmount >= 50000 && loanAmount <= 100000) {
                loanPeriod = 10;
            } else if (loanAmount >= 100000 && loanAmount <= 500000) {
                loanPeriod = 10;
            }
        } else if (loanCategory === 'medical') {
            if (loanAmount >= 0 && loanAmount <= 7999) {
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                loanPeriod = 2;
            } else if (loanAmount >= 50000 && loanAmount <= 100000) {
                loanPeriod = 2;
            } else if (loanAmount >= 100000 && loanAmount <= 500000) {
                loanPeriod = 3;
            } else if (loanAmount >= 500000 && loanAmount <= 1000000) {
                loanPeriod = 4;
            } else if (loanAmount >= 1000000 && loanAmount <= 5000000) {
                loanPeriod = 5;
            } else if (loanAmount >= 5000000 && loanAmount <= 10000000) {
                loanPeriod = 6;
            }
        }
        setLoanPeriod(loanPeriod);
        // Calculate interest rate and collateral rate based on loan category and type
        if (loanCategory === 'Student') {
            // Student loans
            if (loanAmount >= 0 && loanAmount <= 7999) {
                collateralRate = 0;
                interestRate = 0.045;
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                collateralRate = loanType === 'Normal' ? 8000 : 10000;
                interestRate = 0.045;
                loanPeriod = 10;
            } else if (loanAmount > 50000 && loanAmount <= 100000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.15 : loanAmount * 0.2;
                interestRate = 0.045;
                loanPeriod = 10;
            } else {
                alert('Student loans over 100000 are not eligible to be collected.');
                return;
            }
        } else if (loanCategory === 'Medical') {
            // Medical loans
            if (loanAmount >= 0 && loanAmount <= 7999) {
                collateralRate = 0;
                interestRate = 0.17;
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                collateralRate = loanType === 'Normal' ? 8000 : 10000;
                interestRate = 0.17;
                loanPeriod = 2;
            } else if (loanAmount > 50000 && loanAmount <= 100000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.15 : loanAmount * 0.19;
                interestRate = 0.17;
                loanPeriod = 2;
            } else if (loanAmount > 100000 && loanAmount <= 500000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.15 : loanAmount * 0.18;
                interestRate = 0.16;
                loanPeriod = 3;
            } else if (loanAmount > 500000 && loanAmount <= 1000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.15 : loanAmount * 0.18;
                interestRate = 0.15;
                loanPeriod = 4;
            } else if (loanAmount > 1000000 && loanAmount <= 5000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.13 : loanAmount * 0.16;
                interestRate = 0.15;
                loanPeriod = 5;
            } else if (loanAmount > 5000000 && loanAmount <= 10000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.12 : loanAmount * 0.16;
                interestRate = 0.15;
                loanPeriod = 6;
            } else {
                alert('Medical loans over 10000000 are not eligible to be collected.');
                return;
            }
        } else if (loanCategory === 'Mortgage') {
            // Mortgage loans
            if (loanAmount >= 0 && loanAmount <= 99999) {
                collateralRate = 0;
                interestRate = 0.065;
                loanPeriod = 0;
            } else if (loanAmount >= 100000 && loanAmount <= 500000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.24 : loanAmount * 0.29;
                interestRate = 0.065;
                loanPeriod = 15;
            } else if (loanAmount > 500000 && loanAmount <= 1000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.24 : loanAmount * 0.29;
                interestRate = 0.065;
                loanPeriod = 15;
            } else if (loanAmount > 1000000 && loanAmount <= 5000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.22 : loanAmount * 0.27;
                interestRate = 0.06;
                loanPeriod = 20;
            } else if (loanAmount > 5000000 && loanAmount <= 10000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.22 : loanAmount * 0.26;
                interestRate = 0.05;
                loanPeriod = 20;
            } else if (loanAmount > 10000000 && loanAmount <= 50000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.2 : loanAmount * 0.26;
                interestRate = 0.045;
                loanPeriod = 20;
            } else if (loanAmount > 50000000 && loanAmount <= 100000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.2 : loanAmount * 0.25;
                interestRate = 0.045;
                loanPeriod = 30;
            }
        } else if (loanCategory === 'Standard') {
            // Standard loans
            if (loanAmount >= 0 && loanAmount <= 7999) {
                collateralRate = 0;
                interestRate = 0.18;
                loanPeriod = 0;
            } else if (loanAmount >= 8000 && loanAmount <= 50000) {
                collateralRate = loanType === 'Normal' ? 8000 : 10000;
                interestRate = 0.18;
                loanPeriod = 2;
            } else if (loanAmount > 50000 && loanAmount <= 100000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.16 : loanAmount * 0.2;
                interestRate = 0.18;
                loanPeriod = 2;
            } else if (loanAmount > 100000 && loanAmount <= 500000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.155 : loanAmount * 0.2;
                interestRate = 0.18;
                loanPeriod = 3;
            } else if (loanAmount > 500000 && loanAmount <= 1000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.15 : loanAmount * 0.19;
                interestRate = 0.17;
                loanPeriod = 4;
            } else if (loanAmount > 1000000 && loanAmount <= 5000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.13 : loanAmount * 0.18;
                interestRate = 0.16;
                loanPeriod = 5;
            } else if (loanAmount > 5000000 && loanAmount <= 10000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.12 : loanAmount * 0.17;
                interestRate = 0.16;
                loanPeriod = 6;
            } else if (loanAmount > 10000000 && loanAmount <= 50000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.11 : loanAmount * 0.16;
                interestRate = 0.15;
                loanPeriod = 8;
            } else if (loanAmount > 50000000 && loanAmount <= 100000000) {
                collateralRate = loanType === 'Normal' ? loanAmount * 0.1 : loanAmount * 0.16;
                interestRate = 0.15;
                loanPeriod = 10;
            }
        }

        // Calculate monthly repayments, total interest, and total collateral
        const months = loanCategory === 'Mortgage' ? 180 : loanCategory === 'Student' ? 120 : 36;
        const monthlyInterestRate = interestRate / 12;
        const monthlyRepayment =
            (loanAmount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -months));
        const totalInterestAmount = monthlyRepayment * months - loanAmount;
        const totalCollateralAmount = collateralRate;
        const totalLoanPeriod = loanPeriod;

        setMonthlyRepayments(monthlyRepayment.toFixed(2));
        setTotalInterest(totalInterestAmount.toFixed(2));
        setTotalCollateral(totalCollateralAmount.toFixed(2));
        setLoanPeriod(totalLoanPeriod.toFixed(2));
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleCloseError = () => {
        setErrorMessage('');
    };

    return (
        <div>
            <section id="home">
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <p className="lead text-center fs-4 mb-1 
                            text-white">
                                Welcome to
                            </p>
                            <h1 className="display-4 fw-bolder mb-4 text-center
                        text-white">Bitloans Capital
                            </h1>
                            <h2 className="display-6 fw-bolder mb-1 text-center
                        text-white">Unlock the Potential of Bitcoin Lending.
                            </h2>
                            <p className="lead text-left fs-4 mb-5 
                        text-white" style={{ textAlign: 'justify' }}>
                                Welcome to BitloansCapital, your trusted lending platform for secure
                                and efficient borrowing solutions. With our diverse loan categories,
                                competitive interest rates, and dedicated customer support, we are here
                                to help you achieve your financial goals with ease.
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={() => { window.location.href = '/contact'; }}>
                                    Contact Us</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => { window.location.href = '/about'; }}>
                                    About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Big Added */}

            <section id='added1'>
                <div className="container my-5 py-5"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        background: 'linear-gradient(to right, #fbfbfb, #ededed)',
                        minHeight: '30vh',
                        width: '100%',
                        padding: '3vh 1.5rem',
                        boxSizing: 'border-box',
                        fontFamily: 'Garamond, serif',
                        textAlign: 'center',
                    }}
                >
                    <div className="item">
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                marginBottom: '1vh',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            About
                        </div>
                        <div
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            3500 BTC
                        </div>
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'normal',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            paid out to lenders
                        </div>
                    </div>

                    <div className="item">
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                marginBottom: '1vh',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            About
                        </div>
                        <div
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            $600 Million
                        </div>
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'normal',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            Handled
                        </div>
                    </div>

                    <div className="item">
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                marginBottom: '1vh',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            About
                        </div>
                        <div
                            style={{
                                fontSize: '3vw',
                                fontWeight: 'bold',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            $4 Million
                        </div>
                        <div
                            style={{
                                fontSize: '1.2vw',
                                fontWeight: 'normal',
                                color: '#07425b',
                                letterSpacing: '0.15vh',
                            }}
                        >
                            Loaned a Day
                        </div>
                    </div>
                </div>
            </section>


            <section id="added">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontFamily: 'Garamond, serif', color: '#07425b', padding: '3vw', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                                <div style={{ flex: 1, textAlign: 'center' }}>
                                    <h2 style={{ fontSize: '2.5vw', marginBottom: '0.5vw' }}>Investment rates as high as</h2>
                                    <span style={{ fontSize: '18vw', lineHeight: 1, letterSpacing: '1vw' }}>14</span>
                                    <span style={{ fontSize: '4vw', letterSpacing: '0.5vw' }}>%</span>
                                    <span style={{ fontSize: '1.5vw', lineHeight: 1, letterSpacing: '0.25vw' }}>P.A</span>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>

                        <div className="col-md-6">
                            <div style={{ flex: 1, paddingLeft: '2vw' }}>
                                <ul style={{ fontSize: '1.5vw', lineHeight: 1.5 }}>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>High Returns: Earn up to 14% p.a. on your investments, providing you with attractive and competitive returns.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Security: Our platform prioritizes the security of your investments, implementing robust measures to safeguard your funds and personal information.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Privacy: We ensure the privacy of your data, employing advanced encryption protocols and strict confidentiality practices to protect your sensitive information.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Customer Service and User-Friendliness: Experience dedicated customer support and a user-friendly interface, making your lending journey seamless and hassle-free.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div style={{ flex: 1, paddingLeft: '2vw' }}>
                                <ul style={{ fontSize: '1.5vw', lineHeight: 1.1 }}>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Flexible Loan Categories: Choose from a diverse range of loan categories tailored to meet your specific financial needs, including student loans, medical loans, mortgage loans, and standard loans.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Streamlined Application Process: Enjoy a straightforward and hassle-free borrowing experience with our user-friendly application process, allowing you to submit your loan application quickly and easily.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Competitive Interest Rates: Benefit from competitive interest rates tailored to each loan category, ensuring you can access funding at affordable rates.</li>
                                    <li style={{ marginBottom: '1vw', textAlign: 'justify' }}>Dedicated Customer Support: Receive personalized assistance throughout your borrowing journey from our experienced customer support team, who are available to address any questions or concerns you may have.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontFamily: 'Garamond, serif', color: '#07425b', padding: '3vw', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                                <div style={{ flex: 1, textAlign: 'center' }}>
                                    <h2 style={{ fontSize: '2.5vw', marginBottom: '0.5vw' }}>Loan rates from as low as</h2>
                                    <span style={{ fontSize: '18vw', lineHeight: 1, letterSpacing: '1vw' }}>5</span>
                                    <span style={{ fontSize: '4vw', letterSpacing: '0.5vw' }}>%</span>
                                    <span style={{ fontSize: '1.5vw', lineHeight: 1, letterSpacing: '0.25vw' }}>P.A</span>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services */}

            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h3 className="fs-5 text-left mb-0">Our Services </h3>
                            <h1 className="display-6 text-left mb-4">Why Choose Bitloanscapital?</h1>
                            <hr className="w-100 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-md-4">
                            <a href='/lend' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <i className="fa fa-money text-center fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                    <h5 className="card-title text-center mb-3 fs-4 fw-bold">Lending</h5>
                                    <div className="card-body text-left">
                                        <p className="card-text text-center lead" style={{ fontSize: '1.7vw' }}>As a lender, you can enjoy attractive returns on your
                                            Bitcoin investment. Our interest rates are above 15%, allowing us to offer you
                                            competitive returns of 14% per annum. We strive to provide industry-leading returns
                                            while prioritizing the profitability of our lenders.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <a href='/borrow' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <i className="fa fa-handshake-o text-center fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                    <h5 className="card-title text-center mb-3 fs-4 fw-bold">Borrowing
                                    </h5>
                                    <div className="card-body text-left">
                                        <p className="card-text text-center lead" style={{ fontSize: '1.7vw' }}>At Bitloanscapital, we offer a diverse range of loan categories
                                            designed to meet the specific financial needs of our clients.
                                            Whether you're a student in need of educational funding, medical expenses, or looking to finance
                                            a mortgage, or simply need a standard loan, you are in the right place.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            { /* extra paragraph services */}
            <section id='extra'>
                <div className="container my-5 py-5">
                    <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-left mb-4"><i className="fa fa-arrow-left me-2" style={{ color: '#07425b' }}></i> Industry-Leading Returns</h1>
                            <h3 className="display-8 text-left mb-4">As a lender, you can enjoy attractive returns on your
                                Bitcoin investment. Our interest rates are above 15%, allowing us to offer you
                                competitive returns of 14% per annum. We strive to provide industry-leading returns
                                while prioritizing the profitability of our lenders.</h3>
                        </div>
                    </div>

                    <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-left mb-4"><i className="fa fa-book me-2" style={{ color: '#07425b' }}></i> Flexible Terms and Conditions</h1>
                            <h3 className="display-8 text-left mb-4">Unlike automated crypto lending platforms, our terms and
                                conditions are set by the company and frequently updated based on community feedback.
                                This flexibility allows us to adapt and meet the evolving needs of our clients. We take
                                community response seriously and value the input of our users.</h3>
                        </div>
                    </div>

                    <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-left mb-4"><i className="fa fa-user-secret me-2" style={{ color: '#07425b' }}></i> Privacy and Security</h1>
                            <h3 className="display-8 text-left mb-4">We prioritize the privacy and security of our clients. Our platform operates
                                fully online, and user data is highly encrypted to provide the highest level of privacy. Our anonymous
                                wallet system ensures that your transactions remain private and secure. Additionally, we operate out of
                                a tax haven jurisdiction, further enhancing privacy and minimizing regulatory obligations.</h3>
                        </div>
                    </div>

                    <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-left mb-4"><i className="fa fa-universal-access me-2" style={{ color: '#07425b' }}></i>Global Accessibility</h1>
                            <h3 className="display-8 text-left mb-4">Bitloanscapital operates fully online, eliminating the need for physical
                                operations. This allows us to serve clients globally, providing access to our services from anywhere
                                in the world. Wherever you are in the world, you can participate in the future of decentralized
                                finance.</h3>
                        </div>
                    </div>

                    <div className="row" style={{ background: '#f5f5f5', margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-left mb-4"><i className="fa fa-lock me-2" style={{ color: '#07425b' }}></i>Secure and User-Friendly Platform</h1>
                            <h3 className="display-8 text-left mb-4">Our user-friendly platform makes the loan application process
                                simple and hassle-free. With just a few clicks, you can create an account, deposit your
                                Bitcoin, and choose whether to lend or borrow. Our secure Bitcoin wallet ensures that your
                                funds are protected, and our platform operates fully online, providing convenience and accessibility.</h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Loan Categories */}
            <section id="loan">
                <div className="container my-5 py-5">
                    <div className="row" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">Our Loan Categories</h1>

                            <hr className="w-25 mx-auto" />
                            <h3 className="display-8 text-left mb-4">We offer a range of loan categories to suit different
                                financial needs. Whether you're a student looking for educational financing, a medical professional
                                in need of funding, or a homeowner seeking a mortgage, we have tailored loan options for you. Our loan
                                categories include:</h3>
                        </div>
                    </div>

                    <div className="row mt-5" style={{ margin: '100px', marginBottom: '0' }}>
                        <div className="col-md-4">
                            <a href='/medical' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-money fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Medical Loans
                                        </h5>
                                        <p className="card-text lead" style={{ textAlign: 'left' }}>Financial assistance for medical treatments, procedures, or healthcare-related expenses.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <a href='/borrow' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-dollar fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Student Loans
                                        </h5>
                                        <p className="card-text lead" style={{ textAlign: 'justify' }}>Funding for educational expenses to support your academic journey.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <a href='/mortgage' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-btc fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Mortgage Loans
                                        </h5>
                                        <p className="card-text lead" style={{ textAlign: 'left' }}>Loans specifically designed for homebuyers or homeowners looking to refinance.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="row mt-5" style={{ margin: '100px', marginTop: '0', marginBottom: '0' }}>
                        <div className="col-md-4">
                            <a href='/standard' style={{ textDecoration: 'none' }}>
                                <div className="card p-3 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-bank fa-4x mb-4" style={{ color: '#07425b' }}></i>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">Standard Loans
                                        </h5>
                                        <p className="card-text lead" style={{ textAlign: 'left' }}>General-purpose loans for various personal or business needs.
                                        </p>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section id='loancalc'>

                <div className="loan-calculator">
                    <h2>Loan Calculator</h2>
                    <div className="form-group">
                        <label htmlFor="loan-category">Loan Category:</label>
                        <select
                            id="loan-category"
                            value={loanCategory}
                            onChange={handleLoanCategoryChange}
                        >
                            <option value="">Select</option>
                            <option value="Standard">Standard Loan</option>
                            <option value="Mortgage">Mortgage Loan</option>
                            <option value="Student">Student Loan</option>
                            <option value="Medical">Medical Loan</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="loan-type">Loan Type:</label>
                        <select id="loan-type" value={loanType} onChange={handleLoanTypeChange}>
                            <option value="">Select</option>
                            <option value="Normal">Normal Loan</option>
                            <option value="Emergency">Emergency Loan</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="loan-amount">Loan Amount:</label>
                        <input
                            id="loan-amount"
                            type="number"
                            value={loanAmount}
                            onChange={handleLoanAmountChange}
                            placeholder="Enter loan amount"
                        />
                    </div>

                    <button className='button1' onClick={calculateLoanDetails}>Calculate</button>
                    <div className="alert">{errorMessage}</div>
                    {monthlyRepayments > 0 && (
                        <div className="result">
                            <h3>Loan Results:</h3>
                            <p>Monthly Payment: ${monthlyRepayments}</p>
                            <p>Total Interest: ${totalInterest}</p>
                            {loanAmount >= 8000 && (
                                <p>Collateral: ${totalCollateral}</p>
                            )}
                            {loanPeriod > 0 && (
                                <p>Loan Period (months): {loanPeriod * 12}</p>
                            )}
                        </div>
                    )}
                </div>

            </section>

            <section id="end">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4 text-white">Join the Bitloanscapital Community</h1>

                            <hr className="w-25 mx-auto" />
                            <h3 className="display-8 text-left mb-4 text-white" style={{ textAlign: 'justify', margin: '100px', marginTop: '0' }}>Bitloanscapital is more than just a lending platform.
                                it is a thriving community of like-minded individuals who believe in the power of Bitcoin and decentralized
                                finance. We encourage active participation and value community feedback. Together, we can shape the future of
                                lending and redefine opportunities for financial growth.
                                Ready to get started? Create an account today and experience the seamless and profitable world of Bitloanscapital.
                            </h3>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={() => { window.location.href = '/contact'; }}>
                                    Sign Up</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2" onClick={() => { window.location.href = '/about'; }}>
                                    Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
