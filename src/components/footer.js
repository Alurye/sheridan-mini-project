import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
  return (
    <div id="footer">
    <Grid >
      <Row>
        <Col xs={6} sm={6} md={4} lg={3}>
            <ul className="fa-ul">
              <li><FontAwesomeIcon icon={faPhone} listItem/><strong><a href="#">+1 800 WEBSITE</a></strong></li>
              <li><FontAwesomeIcon icon={faEnvelope} listItem ></FontAwesomeIcon><a  href=""> hello@mywebnow.com</a></li>
              <li> <address>  <FontAwesomeIcon icon={faMapMarker} listItem/> 1 Main st <br />
                        Floor 6, <br />
                        New York, NY 10005
                    </address>
                  </li>

            </ul>

        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
           <ul className="fa-ul">
          <li><strong>Company</strong></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="3">Contact Us</a></li>   </ul>
      </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ul className="fa-ul">
              <li><strong>Services</strong></li>
            <li><a href="#">Web Hosting</a></li>
            <li><a href="#">Cloud Hosting</a></li>
            <li><a href="#">VPS Servers</a></li>
            <li><a href="#">Domain Names</a></li>
          </ul>


      </Col>
      <Col xs={6} sm={6} md={8} lg={2}>
        <ul className="fa-ul">
          <li><strong>Others</strong></li>
          <li><a href="#">Transfer Domains</a></li>
          <li><a href="#">Customer Portal</a></li>
          <li><a href="#">Support Portal</a></li>
          <li><a href="#">Video Portal</a></li>
        </ul>

      </Col>
        <Col md={4} lg={1}>
          <ul className="fa-ul">
            <li><a href="">
              <FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faYoutube}  size="lg"/> </a></li>
            <li><a href=""><FontAwesomeIcon icon={faTwitter} size="lg"/></a></li>
          </ul>

      </Col>
      </Row>
    </Grid>
    </div>
  )
}

export default Footer;
