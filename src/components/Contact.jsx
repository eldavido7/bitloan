import { React, useState } from 'react';



export default function Contact() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (

        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">

                            <h1 className="display-6 text-center mb-4">
                                <b>Talk </b>To Us
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md 6">
                            <img src="/assets/contact.jpg" alt="Contact" className='w-75' />
                        </div>

                        <div className="col-md-6">
                            <form action="">

                                <div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="option1"
                                            name="options"
                                            value="option1"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="option1">Email</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="option2"
                                            name="options"
                                            value="option2"
                                            checked={selectedOption === 'option2'}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="option2">Option 2</label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="option3"
                                            name="options"
                                            value="option3"
                                            checked={selectedOption === 'option3'}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="option3">Option 3</label>
                                    </div>

                                    {selectedOption === 'option1' && (
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">
                                                Full Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="John Doe" />
                                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="+1 234 567890" />

                                            <label for="exampleFormControlTextarea1" className="form-label">
                                                Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                            <br></br>
                                            <button type="submit" className='btn btn-outline-primary rounded-pill px-4'>Submit <i className="fa fa-paper-plane ms-2 "></i></button>

                                        </div>

                                    )}
                                    {selectedOption === 'option2' && (
                                        <div>
                                            <label>Text Box 2</label>
                                            <input type="text" />
                                        </div>
                                    )}
                                    {selectedOption === 'option3' && (
                                        <div>
                                            <label>Text Box 3</label>
                                            <input type="text" />
                                        </div>
                                    )}
                                </div>


                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
