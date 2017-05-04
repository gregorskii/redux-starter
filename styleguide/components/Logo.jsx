import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import logo from './logo.svg';

const styles = ({ font }) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: font,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#fff'
  },
  image: {
    width: '2.5em',
    marginLeft: '-0.5em'
  }
});

export function LogoRenderer({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <img alt="logo" className={classes.image} src={logo} />
      {children}
    </h1>
  );
}

LogoRenderer.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node
};

LogoRenderer.defaultProps = {
  children: null
};

export default Styled(styles)(LogoRenderer);
