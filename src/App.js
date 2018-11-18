import React, { Component } from 'react';
import NavContainer from './components/nav';
import Services from './components/services';
import SearchForm from './components/search-form';
import Footer from './components/footer';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
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

          <div id="wrapper">
            <Services />
            <Grid id="call-to-action">
              <Row>
                <Col lg={7}>
                  <h2>Are you ready? <br/> <span>create an account, or contact us.</span></h2>
                </Col>
                <Col lg={5}>
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
