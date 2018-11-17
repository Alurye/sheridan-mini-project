import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

const Footer = (props) => {
  return (
    <Grid id="footer">
      <Row>

        <Col lg={2}>

          <p>+1 800 WEBSITE</p>
          <p><a  href=""> hello@mywebnow.com</a></p>
          <address>1 Main st <br />
              Floor 6, <br />
              New York, NY 10005
          </address>
        </Col>
        <Col lg={2}>
          <p><strong>Company</strong></p>
          <p><a href="#">About Us</a></p>
          <p><a href="#">News</a></p>
          <p><a href="#">FAQ</a></p>
          <p><a href="3">Contact Us</a></p>
      </Col>
        <Col lg={2}>
        <p><strong>Services</strong></p>
          <p><a href="#">Web Hosting</a></p>
          <p><a href="#">Cloud Hosting</a></p>
          <p><a href="#">VPS Servers</a></p>
          <p><a href="#">Domain Names</a></p>
      </Col>
      <Col lg={2}>
        <p><strong>Others</strong></p>
        <p><a href="#">Transfer Domains</a></p>
        <p><a href="#">Customer Portal</a></p>
        <p><a href="#">Support Portal</a></p>
        <p><a href="#">Video Portal</a></p>
      </Col>
        <Col lg={4}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
      </Col>
      </Row>
    </Grid>
  )
}

export default Footer;
