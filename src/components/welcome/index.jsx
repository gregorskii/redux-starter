import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './welcome.scss';

const Welcome = (props) => {
  return (
    <section>
      <div className={styles.welcome}>{props.welcomeText}</div>
      <Link to="/test">Test</Link>
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
