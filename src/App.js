import React, { Component } from 'react';
import NavContainer from './components/nav';
import SearchForm from './components/search-form';
import Footer from './components/footer';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavContainer />

          <Jumbotron>
          <div>
             <h1>Get a website in  <br/>15 minutes  <span className="lightgreen">or less!</span></h1>
          <SearchForm />
          </div>
          <div id="learn-more">
            <p>learn how we can enhance your business</p>
            <Button className="btn-circle bg-lightgreen"><FontAwesomeIcon icon={faArrowDown} /> </Button>
          </div>

          <div id="create-your-account">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugit voluptatibus expedita sequi aut, cumque impedit, maiores at. Facilis magnam veniam, ipsam tempore voluptatibus fugiat, ullam repudiandae laboriosam excepturi possimus!</p>
              <Button>create your account</Button>
          </div>

          <div>
            <Grid fluid={true} id="services">
              <h3>Our Services</h3>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6} >
                  <Row>
                    <Col xs={3} sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
                    <Col xs={7} sm={7} lg={8}>
                       <h4>Web Hosting <FontAwesomeIcon icon={faArrowRight} /></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
                  </Row>

               </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Row>
                    <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
                    <Col xs={7} sm={7} lg={8}>
                       <h4>Resellers <FontAwesomeIcon icon={faArrowRight} /></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
                  </Row>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} >
                  <Row>
                    <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
                    <Col xs={7} sm={7} lg={8}>
                       <h4>VPS Hosting <FontAwesomeIcon icon={faArrowRight} /></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
                  </Row>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Row>
                    <Col xs={3}  sm={3} lg={2}><img src="https://via.placeholder.com/84" /></Col>
                    <Col xs={7} sm={7} lg={8}>
                       <h4>Cloud Hosting <FontAwesomeIcon icon={faArrowRight} /></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil cupiditate libero eligendi possimus totam sed. Quasi quidem ab cumque magni inventore culpa, debitis?</p></Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
            <Grid id="call-to-action">
              <Row>
                <Col lg={8}>
                  <h2>Are you ready? <span>create an account, or contact us.</span></h2>
                </Col>
                <Col lg={4}>
                  <Button>create your account</Button>
                  <Button>contact us</Button>
                </Col>
              </Row>

            </Grid>
          </div>
        </Jumbotron>
          <Footer />

      </main>
    );
  }
}

export default App;
