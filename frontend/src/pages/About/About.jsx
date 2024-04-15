import React from 'react';
import './About.css';

const About = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const email = event.target.elements.email.value; // Get the value of the email input
        const subject = "New Message from Tomato. - The Food Delivery App"; // Set the subject for the email
        const body = "Please write your message here..."; // Set the default body for the email
        window.location.href = `mailto:achieve01ak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
    return (
        <div className='about'>
            <div className="about-content">
                <h2 className='about-head'>About Us</h2>
                <h4>Welcome to Tomato. - The Food Delivery App!</h4>
                <p>At Tomato., we're dedicated to bringing you the best culinary experiences from your favorite local restaurants, 
                    right to your doorstep. Whether you're craving comfort food classics, gourmet delicacies, or healthy options, 
                    Tomato. has something for everyone.</p>
                <h4>Our Mission</h4>
                <p>Tomato. is on a mission to redefine the food delivery experience. We're committed to providing seamless ordering, 
                    reliable delivery, and a diverse selection of cuisines to satisfy every palate. With Tomato., enjoy the convenience 
                    of delicious food at your fingertips.</p>
                <h4>How It Works</h4>
                <p>Ordering with Tomato. is quick and easy. Simply download our app or visit our website, browse through our curated 
                    selection of restaurants, place your order, and relax while our dedicated delivery team ensures your food arrives 
                    fresh and on time. With Tomato., enjoy peace of mind knowing your cravings will be satisfied with just a few taps.</p>
                <h4>Quality and Safety</h4>
                <p>At Tomato., we prioritize food safety and quality above all else. We partner with top-rated restaurants that adhere 
                    to strict hygiene standards and use only the freshest ingredients. From kitchen to doorstep, we ensure your food is 
                    handled with care and delivered piping hot and ready to enjoy.</p>
                <h4>Community Engagement</h4>
                <p>We're proud to be a part of the communities we serve. Tomato. actively supports local restaurants, small businesses, and 
                    community initiatives. By choosing Tomato., you're not just ordering food – you're supporting your neighborhood and 
                    helping it thrive.</p>
                <h4>Contact Us</h4>
                <p>Got questions or feedback? We're here to help! Reach out to our friendly customer support team via phone, email, or 
                    live chat. Your satisfaction is our priority, and we're committed to providing exceptional service every step of 
                    the way.</p>
                <h4>Join Us</h4>
                <p>Join the Tomato. family today and experience food delivery reimagined. Whether you're dining solo, hosting a gathering, or 
                    treating your loved ones, let Tomato. take care of the food while you focus on creating memories. With Tomato., every meal 
                    is a delight.</p>
                <p><i>Thank you for choosing Tomato. - The Food Delivery App, where great food meets convenience!</i></p>
            </div>
            <div className="mailing-list">
                <h2>Join Our Mailing List</h2>
                <p>Subscribe to our mailing list to receive updates, special offers, and more!</p>
                <div className='mailing-list-input'>
                    <input type="email" name="email" placeholder='Enter your email' />
                    <button onClick={handleFormSubmit}>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default About;
