import React from 'react';
import '../css/contact.css'
function Contact() {
    return (
        <>
            <section className='contact'>
                <div className='contact-card'>
                    <div className='Contact-header'>
                        <h1>Contact Us</h1>
                        <span>Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.</span>
                    </div>
                    <div>
                        <form className='contact-form'>
                            <div>
                                <span>Name</span>
                                <input type='text' id='name'></input>
                            </div>
                            <div>
                                <span>Email</span>
                                <input type='text' id='email'></input>
                            </div>
                            <div>
                                <span>Message</span>
                                <textarea id='message' rows={10} cols={50}></textarea>
                            </div>
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;