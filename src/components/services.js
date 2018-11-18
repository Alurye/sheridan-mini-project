import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Services = (props) => {
  return (
    <Grid id="services">
      <h3>Our Services</h3>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} >
          <Row>
            <Col xs={3} sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
            <Col xs={7} sm={7} lg={8}>
               <h4><a href="#">
                 Web Hosting <FontAwesomeIcon icon={faArrowRight} /></a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
          </Row>

       </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Row>
            <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
            <Col xs={7} sm={7} lg={8}>
               <h4><a href="#">
                 Resellers <FontAwesomeIcon icon={faArrowRight} /></a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} >
          <Row>
            <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
            <Col xs={7} sm={7} lg={8}>
               <h4><a href="#">
                 VPS Hosting <FontAwesomeIcon icon={faArrowRight} /></a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Row>
            <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
            <Col xs={7} sm={7} lg={8}>
               <h4><a href="#">
                 Cloud Hosting <FontAwesomeIcon icon={faArrowRight} /></a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
          </Row>
        </Col>
      </Row>
    </Grid>


  );
}
export default Services;
