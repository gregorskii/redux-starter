import React, { PropTypes } from 'react';

import styles from './welcome.scss';

const Welcome = (props) => {
  return (
    <div className={styles.welcome}>{props.welcomeText}</div>
  );
};

Welcome.propTypes = {
  welcomeText: PropTypes.string
};

Welcome.defaultProps = {
  welcomeText: 'Welcome!'
};

export default Welcome;
