import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
const SearchForm = (props) => {
  return (
    <Form inline>
        <FormGroup controlId="formBasicText">
          <FormControl type="text" placeholder="Write your domain name here.." />
          <FormControl.Feedback />
            <Button bsSize="large" className="bg-lightgreen"  type="submit">Search</Button>
        </FormGroup>
        </Form>
      )
}

export default SearchForm;
