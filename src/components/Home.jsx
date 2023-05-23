import React from 'react'

export default function Home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center
                        text-white">Bitloans Capital
                        </h1>
                        <h2 className="display-6 fw-bolder mb-1 text-center
                        text-white">Unlock the Potential of Bitcoin Lending.
                        </h2>
                        <p className="lead text-center fs-4 mb-5 
                        text-white"> 
                            At Bitloanscapital, we are dedicated to revolutionizing the lending industry 
                            by harnessing the power of Bitcoin. Founded in 2019 by industry leaders and 
                            backed by years of experience, our platform is designed to provide a seamless 
                            and secure lending experience for both lenders and borrowers.
                        </p>
                        <div className="buttons d-flex justify-content-center">
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                                Request Callback</button>
                            <button className="btn btn-outline-light rounded-pill px-4 py-2">
                                About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services */}

        <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services </h3>
                            <h1 className="display-6 text-center mb-4">Why Choose Bitloanscapital?</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-money fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Industry-Leading Returns
                                    </h5>
                                    <p class="card-text lead">As a lender, you can enjoy attractive returns on your 
                                    Bitcoin investment. Our interest rates are above 15%, allowing us to offer you 
                                    competitive returns of 14% per annum. We strive to provide industry-leading returns 
                                    while prioritizing the profitability of our lenders.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-list-alt fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Flexible Terms and Conditions
                                    </h5>
                                    <p class="card-text lead">Unlike automated crypto lending platforms, our terms and 
                                    conditions are set by the company and frequently updated based on community feedback. 
                                    This flexibility allows us to adapt and meet the evolving needs of our clients. We take 
                                    community response seriously and value the input of our users.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-user-secret fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Privacy and Security
                                    </h5>
                                    <p class="card-text lead">We prioritize the privacy and security of our clients. Our platform operates 
                                    fully online, and user data is highly encrypted to provide the highest level of privacy. Our anonymous 
                                    wallet system ensures that your transactions remain private and secure. Additionally, we operate out of 
                                    a tax haven jurisdiction, further enhancing privacy and minimizing regulatory obligations.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-globe fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Global Accessibility
                                    </h5>
                                    <p class="card-text lead">Bitloanscapital operates fully online, eliminating the need for physical 
                                    operations. This allows us to serve clients globally, providing access to our services from anywhere 
                                    in the world. Wherever you are in the the world, you can participate in the future of decentralized 
                                    finance.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-shield fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Secure and User-Friendly Platform
                                    </h5>
                                    <p class="card-text lead">Our user-friendly platform makes the loan application process 
                                    simple and hassle-free. With just a few clicks, you can create an account, deposit your 
                                    Bitcoin, and choose whether to lend or borrow. Our secure Bitcoin wallet ensures that your 
                                    funds are protected, and our platform operates fully online, providing convenience and accessibility.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>

                </div>
            </section>

            {/* Loan Categories */}
            <section id="loan">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">Our Loan Categories</h1>
                            
                            <hr className="w-25 mx-auto" />
                            <h3 className="display-8 text-center mb-4">We offer a range of loan categories to suit different 
                            financial needs. Whether you're a student looking for educational financing, a medical professional 
                            in need of funding, or a homeowner seeking a mortgage, we have tailored loan options for you. Our loan 
                            categories include:</h3>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-money fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Medical Loans
                                    </h5>
                                    <p class="card-text lead">Financial assistance for medical treatments, procedures, or healthcare-related expenses.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-dollar fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Student Loans
                                    </h5>
                                    <p class="card-text lead">Funding for educational expenses to support your academic journey.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-btc fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Mortgage Loans
                                    </h5>
                                    <p class="card-text lead">Loans specifically designed for homebuyers or homeowners looking to refinance.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 h-100">
                                <div class="card-body text-center">
                                    <i className="fa fa-bank fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Standard Loans
                                    </h5>
                                    <p class="card-text lead">General-purpose loans for various personal or business needs.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section style={{ backgroundImage: 'url(/assets/down.jpg)', backgroundRepeat: "no-repeat", backgroundSize: 'cover', 
                backgroundPosition: 'center center'}}  id="join">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4 text-white">Join the Bitloanscapital Community</h1>
                            
                            <hr className="w-25 mx-auto" />
                            <h3 className="display-8 text-center mb-4 text-white">Bitloanscapital is more than just a lending platform. 
                            it is a thriving community of like-minded individuals who believe in the power of Bitcoin and decentralized 
                            finance. We encourage active participation and value community feedback. Together, we can shape the future of 
                            lending and redefine opportunities for financial growth. 
                            Ready to get started? Create an account today and experience the seamless and profitable world of Bitloanscapital.
                            </h3>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-outline-primary me-4 rounded-pill px-4 py-2 text-white">
                                    Request Callback</button>
                                <button className="btn btn-outline-primary rounded-pill px-4 py-2 text-white">
                                    Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
