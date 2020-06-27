/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="/">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/avatar.png" alt="" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">Arpit<span className="text-primary">Nigam</span></h1>
            <div className="subheading mb-5">
              Seattle, WA · (213) 263-1805 ·
              <a href="mailto:arpit.nigam@outlook.com">arpit.nigam@outlook.com</a>
            </div>
            <p className="lead mb-5">I am currently working as Software Development Engineer 2 for Amazon FinTech. 
            I love to extract fun out of everything and kind of workaholic. 
            I like myself loaded with responsibilities- that is what makes my applications work faster and smoother (though it is interpreted differently by different people). 
            An Engineer by choice and not by force. 
            I love playing with Computers (and computer games also), meet challenges so often but I'm all satisfied with what I do and that keeps me happy.</p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/nigamarpit/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a className="social-icon" href="https://github.com/nigamarpit" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              {/* <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
              <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
