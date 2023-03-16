import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const GetInTouchFormTwo = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="get-in-touch-area get-in-touch-area-two bg-color ptb-100">
			<div className="container">
				<div className="section-title">
					<span>Get In Touch</span>
					<h2>Contact Us Today To Speak With An Expert About Your Specific Needs</h2>
				</div>

                <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className="get-in-touch-form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={contact.name}
                                    onChange={handleChange}
                                    className="form-control" 
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.name && 'Name is required.'}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    value={contact.email}
                                    onChange={handleChange}
                                    className="form-control" 
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.email && 'Email is required.'}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                    type="text" 
                                    name="number" 
                                    value={contact.number}
                                    onChange={handleChange} 
                                    className="form-control" 
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.number && 'Number is required.'}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    value={contact.subject}
                                    onChange={handleChange} 
                                    className="form-control" 
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.subject && 'Subject is required.'}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                    name="text" 
                                    cols="30" 
                                    rows="5" 
                                    value={contact.text}
                                    onChange={handleChange} 
                                    className="form-control" 
                                    ref={register({ required: true })}
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.text && 'Text body is required.'}
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-12 col-sm-12">
                            <button type="submit" className="default-btn">Consultation</button>
                        </div>
                    </div>
                </form>
			</div>

            <div className="get-in-touch-shape">
				<img src="/images/get-in-touch-shape.png" alt="Image" />
			</div>
		</div>
    )
}

export default GetInTouchFormTwo;