import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ title }) => (
  <div className="jumbotron hello-world">
    <h1>{title}</h1>
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
