import React from 'react';
import NavigateComponent from '../../components/nav/navigateComponent';
import '../homePage/Homepage.css'
const ContactUspage = () => {
    return (
        <div>
            <NavigateComponent />
            <div class="page-heading contact-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-content">
                                <h4>contact us</h4>
                                <h2>let’s get in touch</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="find-us">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our Location on Maps</h2>
            </div>
          </div>
          <div class="col-md-8">
          <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6031201582323!2d106.80792621533445!3d10.84165366094964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752753a10e477b%3A0x9a064fc589176186!2zVHJ1bmcgdMOibSDEkMOgbyB04bqhbyB2w6AgTmdoacOqbiBj4bupdSBDw7RuZyBuZ2jhu4cgxJDhuqFpIGjhu41jIEZQVA!5e0!3m2!1sen!2s!4v1645418506944!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
          </div>
          <div class="col-md-4">
            <div class="left-content">
              <h4>About our office</h4>
              <p>Our head office is located in a favorable location, high-tech zone, Thu Duc city.
                  <br/>
                  <br/>
                  Because of such a position, we always know how to make the most of the position that it offers.</p>
              <ul class="social-icons">
                <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
}

export default ContactUspage;
