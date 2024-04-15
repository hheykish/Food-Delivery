import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const email = "achieve01ak@gmail.com"; // Replace with your email address
        const subject = "New Message from Tomato. - The Food Delivery App"; // Set the subject for the email
        const name = event.target.elements.name.value; // Get the value of the name input
        const message = event.target.elements.message.value; // Get the value of the message input
        const body = `Name: ${name}\n\nMessage: ${message}`; // Construct the body of the email
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <div className='contact'>
            <div className='contact-head'>
            <h1>Feel free to connect with us !</h1>
            <p>Tel : +91-2124-567-890</p>
            <p>Mail : contact@tomato.com</p>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Your name" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" rows="4" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
