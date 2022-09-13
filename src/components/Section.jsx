import React from 'react';
import PropTypes from 'prop-types';
import StyledSection from './StyledSection';

class Section extends React.Component {
  render() {
    return (
      <StyledSection>
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </StyledSection>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
