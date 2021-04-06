import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return(
    <>
        <Navbar />
        <br />
        <h1 className="heading-text">About Me</h1>
        <br />
        <img src="../assets/headshot.JPG" alt="headshot" className="image" />
        <section className="body-text">Full-stack web developer leveraging experience as an educator, composer and musician to create a creative, clean, and useful web experience for the end user.  As a recent earner of a certificate in full stack development from Northwestern University, I am ready to bring my new skills, enthusiasm and work ethic to your team.  I have experience with HTML, CSS, JavaScript, Node, and MySQL.  I have also shown an ability to write clean, functional, intuitive code.  My previous professional experience is in music education, and I have a bachelor’s degree in music performance, as well as a master’s degree in music education.  I can leverage my previous experience to learn quickly, think on my feet, and find creative solutions to problems.  </section>
        <br />
        <br />
        <br />
        <Footer />
    </>
    )
}

export default Home