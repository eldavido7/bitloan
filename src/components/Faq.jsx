import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function StaticFaqSection() {
  return (
    <MDBContainer>
      <br></br>
      {/* General Questions */}
      <section>
        <p className="text-left mb-5">
          Welcome to
          the Bitloanscapital FAQs page. Here, we address the most common questions and
          concerns about our platform, lending process, and other important aspects. We
          strive to provide you with comprehensive and accurate information to help you
          make informed decisions. If you have any additional queries, feel free to reach
          out to our customer support team.

        </p>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 fw-bold" style={{ color: '#07425b' }}
        >
          FAQ
        </MDBTypography>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="btc pe-2" style={{ color: '#07425b' }} /> What is Bitloanscapital?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  <strong>
                    <u>Bitloanscapital</u>
                  </strong>{" "}
                  is a lending platform that allows individuals to lend their
                  Bitcoin to borrowers in exchange for attractive returns. We provide a secure
                  and transparent environment for lenders and borrowers to connect and meet their
                  financial needs.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="registered pe-2" style={{ color: '#07425b' }}/> Is Bitloanscapital a
                  regulated platform?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  <strong>
                    <u>No, for good reason!</u>
                  </strong>{" "}
                  Bitloanscapital operates in a currently unregulated space to prioritize privacy
                  and provide our clients with the highest level of confidentiality. However, we
                  adhere to applicable laws and regulations in the territories where our services
                  are offered.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="user pe-2" style={{ color: '#07425b' }}/> How do I create an
                  account?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  Creating an
                  account with Bitloanscapital is simple. Visit our website and click on the
                  "Sign Up" button. Fill in the required information, complete the process, and you'll be ready to start lending or borrowing.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="user-secret pe-2" style={{ color: '#07425b' }} /> Is my personal
                  information safe on the platform?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  At
                  Bitloanscapital, take privacy and security seriously. We employ advanced
                  encryption and security measures to safeguard your personal information. We do
                  not disclose client information unless required by law or with the client's
                  consent.

                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="home pe-2" style={{ color: '#07425b' }} /> Can I participate in
                  Bitloanscapital if I'm located outside the supported territories?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  Bitloanscapital complies with the laws and regulations of the territories where
                  our services are offered. It is essential to review the terms and conditions
                  and ensure that you are eligible to participate based on your jurisdiction's
                  laws.

                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </section>

      {/* Lending Questions */}

      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 fw-bold" style={{ color: '#07425b' }}
        >
          Lending Questions
        </MDBTypography>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="thumbs-up pe-2" style={{ color: '#07425b' }} /> How does lending work on Bitloanscapital?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  <strong>
                    <u>Lending</u>
                  </strong>{" "}
                  on
                  Bitloanscapital involves simply depositing Bitcoin into your lending account. Your Bitcoin
                  contributes to the lending pool, which is disbursed to borrowers. You earn
                  interest on your lending account based on the loan terms and duration.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="hand-o-up pe-2" style={{ color: '#07425b' }} /> What are the minimum
                  and maximum lending amounts?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  The minimum
                  lending amount is $5,000, allowing lenders to participate in the lending
                  program. There is no specific maximum lending amount, giving you the
                  flexibility to lend based on your investment goals and available Bitcoin.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="star-half pe-2" style={{ color: '#07425b' }} /> How are interest
                  rates determined?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  Interest
                  rates on Bitloanscapital are determined based on the loan categories, loan
                  amounts, and market conditions. We strive to offer competitive rates that
                  ensure profitability for lenders while providing attractive options for
                  borrowers.

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="money pe-2" style={{ color: '#07425b' }} /> How often are
                  interest payments made?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  Interest
                  payments are made monthly.

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="credit-card-alt pe-2" style={{ color: '#07425b' }} /> Can I withdraw my
                  funds at any time?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  Yes, you
                  have the option to withdraw funds from your lending account at any time. However, it is important to note that early withdrawals may
                  result in a forfeiture of some accrued interest. The specific terms and
                  conditions related to early withdrawals will be outlined in the lending
                  agreement.

                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </section>




      {/* Borrowing Questions */}
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 fw-bold" style={{ color: '#07425b' }}
        >
          Borrowing Questions
        </MDBTypography>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEle">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEle" aria-expanded="true" aria-controls="collapseEle">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="bold pe-2" style={{ color: '#07425b' }} /> How does borrowing work on Bitloanscapital?
                </MDBTypography>
              </button>
            </h2>
            <div id="collapseEle" className="accordion-collapse collapse show" aria-labelledby="headingEle" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  <strong>
                    <u>Borrowers</u>
                  </strong>{" "}
                  can apply for loans on Bitloanscapital by completing the necessary documentation
                  and undergoing a Know Your Customer (KYC) process. Once approved, borrowers
                  receive funds from the lending pool and repay the loan according to the
                  agreed-upon terms.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwe">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwe" aria-expanded="false" aria-controls="collapseTwe">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="calendar pe-2" style={{ color: '#07425b' }} /> What are the loan
                  categories offered?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseTwe" className="accordion-collapse collapse" aria-labelledby="headingTwe" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  Bitloanscapital offers various loan categories, including Student, Medical,
                  Mortgage, and Standard loans. Each category has specific loan amounts, interest
                  rates, and collateral requirements tailored to meet the borrowing needs of
                  different individuals.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThir">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThir" aria-expanded="false" aria-controls="collapseThir">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="hourglass pe-2" style={{ color: '#07425b' }} /> What collateral is
                  required for borrowing?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseThir" className="accordion-collapse collapse" aria-labelledby="headingThir" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  Collateral
                  requirements vary based on the loan category and amount. Bitloanscapital uses
                  collateral to secure the loans and ensure the safety of lenders' funds

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFourt">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourt" aria-expanded="false" aria-controls="collapseFourt">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="credit-card pe-2" style={{ color: '#07425b' }}/> How long does it
                  take to receive loan funds?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseFourt" class="accordion-collapse collapse" aria-labelledby="headingFourt" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  The time it
                  takes to receive loan funds may vary depending on the loan application review
                  and approval process. Once your loan is approved, the funds will be disbursed
                  to your provided account within a reasonable timeframe

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFif">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFif" aria-expanded="false" aria-controls="collapseFif">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="ban pe-2" style={{ color: '#07425b' }} /> Are there any
                  prepayment penalties?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseFif" class="accordion-collapse collapse" aria-labelledby="headingFif" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  Bitloanscapital does not charge prepayment penalties. If you choose to repay
                  your loan before the agreed-upon term, you can do so without incurring any
                  additional fees or penalties.

                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </section>

      {/* Account Management and Support Questions */}

      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 fw-bold" style={{ color: '#07425b' }}
        >
          Account Management and Support Questions
        </MDBTypography>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSixt">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixt" aria-expanded="true" aria-controls="collapseSixt">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="ticket pe-2" style={{ color: '#07425b' }} /> How can I contact
                  Bitloanscapital for support?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseSixt" className="accordion-collapse collapse show" aria-labelledby="headingSixt" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  For any inquiries or assistance, you can reach our customer support team via email at
                  <strong>
                    <u> support@bitloanscapital.com</u>
                  </strong>{""} or
                  through our support ticket system on the platform. We strive to provide timely
                  and helpful responses to address your concerns.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSev">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSev" aria-expanded="false" aria-controls="collapseSev">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="cogs pe-2" style={{ color: '#07425b' }}/> Can I change my
                  lending or borrowing preferences after creating an account?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseSev" className="accordion-collapse collapse" aria-labelledby="headingSev" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  Yes, you can
                  modify your lending or borrowing preferences after creating an account. Simply
                  log in to your account, navigate to the settings or preferences section, and
                  make the desired changes.

                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingeig">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEig" aria-expanded="false" aria-controls="collapseEig">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="unlock pe-2" style={{ color: '#07425b' }} /> What happens if I
                  forget my account password?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseEig" className="accordion-collapse collapse" aria-labelledby="headingEig" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  If you
                  forget your account password, you can initiate a password reset process by
                  clicking on the "Forgot Password" link on the login page. Follow the
                  instructions provided to reset your password and regain access to your account.

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingNin">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNin" aria-expanded="false" aria-controls="collapseNin">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="book pe-2" style={{ color: '#07425b' }}/> How often are
                  account statements provided?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseNin" class="accordion-collapse collapse" aria-labelledby="headingNin" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  Account statements
                  are typically provided annually, allowing you to track your lending
                  and borrowing activities.

                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwen">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwen" aria-expanded="false" aria-controls="collapseTwen">
                <MDBTypography tag="h6" className="mb-3" style={{ color: '#07425b' }}>
                  <MDBIcon fa icon="comments-o pe-2" style={{ color: '#07425b' }} /> What happens in the
                  event of a dispute or issue with a loan?

                </MDBTypography>
              </button>
            </h2>
            <div id="collapseTwen" class="accordion-collapse collapse" aria-labelledby="headingTwen" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>
                  In the event
                  of a dispute or issue with a loan, we encourage lenders and borrowers to reach
                  out to our customer support team for assistance. Our team will investigate the
                  matter and work towards a fair resolution per our
                  policies and terms.

                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </section>

      {/* More Questions */}

      <div className="page-container">
        <MDBCol lg="6" md="12" className="text-center">
          <p>
            <span class="fw-bold">
              Still have any questions? <a href="/contact">Contact us</a> Now!
            </span>
          </p>
        </MDBCol>
      </div>

    </MDBContainer>
  );
}