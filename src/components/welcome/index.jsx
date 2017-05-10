import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './welcome.scss';

const Welcome = (props) => {
  return (
    <Jumbotron bsClass="jumbotron" className={styles.welcome}>
      <h1>Redux Starter</h1>
      <p>{props.welcomeText}</p>
      <p>
        <LinkContainer to="/test">
          <Button bsStyle="primary">Test</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  );
};

Welcome.propTypes = {
  welcomeText: PropTypes.string
};

Welcome.defaultProps = {
  welcomeText: 'Welcome!'
};

export default Welcome;
