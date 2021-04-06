import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return(
    <>
        <Navbar />
        <br />
        <h1 class="heading-text">Contact</h1>
        <div class="contact">
            
            <img class="contact-icon" src="../assets/001-call.png" />
            <a href="tel: 773-673-3982">773-673-3982</a>
            <br />
            <img class="contact-icon" src="../assets/003-email.png" />
            <a href="mailto: ryanpburnett@yahoo.com">ryanpburnett@yahoo.com</a>
            <br />
            <img class="contact-icon" src="../assets/002-github.png" />
            <a href="https://github.com/ryanpburnett" target="_blank">Github</a>
            <br />
            <img class="contact-icon" src="../assets/004-linkedin.png" />
            <a href="https://www.linkedin.com/in/ryan-burnett-912b8667/" target="_blank">LinkedIn</a>
            <br />
            <img class="contact-icon" src="../assets/005-resume.png" />
            <a href="assets/resume 3_4_21.pdf" target="_blank">Resume</a>
        </div>
        <br />
        <br />
        <br />
        <Footer />
    </>
    )
}

export default Contact