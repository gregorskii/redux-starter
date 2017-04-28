import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import { LinkContainer } from 'react-router-bootstrap';

import styles from './welcome.scss';

const Welcome = (props) => {
  return (
    <section>
      <Jumbotron bsClass="jumbotron" className={styles.welcome}>
        <h1>Redux Starter</h1>
        <p>{props.welcomeText}</p>
        <p>
          <LinkContainer to="/test">
            <Button bsStyle="primary">Test</Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </section>
  );
};

Welcome.propTypes = {
  welcomeText: PropTypes.string
};

Welcome.defaultProps = {
  welcomeText: 'Welcome!'
};

export default Welcome;
