import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
    return(
    <>
        <Navbar />
        <br />
        <h1 class="heading-text">Portfolio</h1>
        {/* #1 */}
        <div class="portfolio column">
            <p class="portfolio-heading">LyricLysteners</p>
            <p class="body-text">This site is a lyric finder site that generates lyrics for any song, along with a QR code linking to related YouTube videos. This project was done in conjunction with three of my collogues in the Northwestern Illinois University coding boot camp. We used the HappiDev music API and the QR code generator API</p>
            <a href="https://github.com/ryanpburnett/lyric-finder" target="_blank">Link to Github repo</a>
            <br />
            <a href="https://ryanpburnett.github.io/lyric-finder/" target="_blank">Link to site</a>
            <br />
            <a href="https://happi.dev/docs/music" target="_blank">Link to HappiDev</a>
            <br />
            <a href="http://goqr.me/api/doc/create-qr-code/" target="_blank">Link to QR code generator</a>
            <img src="../assets/lyric-lysteners.png" alt="LyricLysteners" width="700" />
        </div>
        {/* #2 */}
        <div class="portfolio column">
            <p class="portfolio-heading">Culture Blog</p>
            <p class="body-text">A blog about various elements of culture.  Sorts articles into different categories Based on user input.  Site has a comments section and likes, as well as using socket.io for a live chat feature.  This project was also done in conjuction with three of my collegues in the Northwestern Illinois University coding boot camp.  </p>
            <a href="https://github.com/matthayden09/project_2" target="_blank">Link to Github repo</a>
            <br />
            <a href="https://gentle-cliffs-54160.herokuapp.com/" target="_blank">Link to site on Heroku</a>
            <br />
            <img src="../assets/culture.jpg" alt="Password Generator" width="700" />
        </div>
        {/* #3 */}
        <div class="portfolio column">
            <p class="portfolio-heading">Readme Generator</p>
            <p class="body-text">A CLI program that automatically generates readme files.  Accepts a project name, description, opens a text editor to copy/paste code examples in, a prompt for adding pictures, and a prompt for adding licences.  So much easier than doing it manually every time.  Future implementation will use ASCII text art on launch.  Uses inquirer and chalk NPM.  </p>
            <a href="https://github.com/ryanpburnett/readme-generator" target="_blank">Link to Github repo</a>
            <br />
            <img src="../assets/readme.jpg" alt="Readme Generator" width="700" />
        </div>
        {/* #4 */}
        <div class="portfolio column">
            <p class="portfolio-heading">Chord Progression Generator</p>
            <p class="body-text">A fun project I've been working on!  This site generates chord progressions, 12-tone rows, and single row rhythm matrices.  Future iterations of this project will feature a play button with dynamically generated MIDI sound.  </p>
            <a href="https://github.com/ryanpburnett/chord-progression" target="_blank">Link to Github repo</a>
            <br />
            <a href="https://ryanpburnett.github.io/chord-progression/" target="_blank">Link to site</a>
            <br />
            <img src="../assets/chord.bmp" alt="Chord Progression Generator" width="700" />
        </div>
        {/* #5 */}
        <div class="portfolio column">
            <p class="portfolio-heading">Magic 8-Ball</p>
            <p class="body-text">A magic 8-ball site, using some interesting css.  Fade-in text to simulate the magic 8-ball die coming up to the surface, as well as a blue gradient to simulate the interior of the 8-ball.  </p>
            <a href="https://github.com/ryanpburnett/eight-ball" target="_blank">Link to Github repo</a>
            <br />
            <a href="https://ryanpburnett.github.io/eight-ball/" target="_blank">Link to site</a>
            <img src="../assets/8ball.bmp" alt="Magic 8-Ball" width="700" />
        </div>
        {/* #6 */}
        <div class="portfolio column">    
            <p class="portfolio-heading">Password Generator</p>
            <p class="body-text">This site generates random passwords at various levels of security.  </p>
            <a href="https://github.com/ryanpburnett/password-generator" target="_blank">Link to Github repo</a>
            <br />
            <a href="https://ryanpburnett.github.io/password-generator/" target="_blank">Link to site</a>
            <br />
            <img src="../assets/password.bmp" alt="Password Generator" width="700" />
        </div>
        <Footer />
    </>
    )
}

export default Portfolio