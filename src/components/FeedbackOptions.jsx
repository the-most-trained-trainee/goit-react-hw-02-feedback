import React from 'react';
import StyledButtonsPanel from './FeedbackOptionsStyled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  goodFeedbackIncrement,
  neutralFeedbackIncrement,
  badFeedbackIncrement,
}) => (
  <StyledButtonsPanel>
    <li>
      <button type="button" onClick={goodFeedbackIncrement}>
        Good
      </button>
    </li>
    <li>
      <button type="button" onClick={neutralFeedbackIncrement}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" onClick={badFeedbackIncrement}>
        Bad
      </button>
    </li>
  </StyledButtonsPanel>
);

FeedbackOptions.propTypes = {
  goodFeedbackIncrement: PropTypes.func.isRequired,
  neutralFeedbackIncrement: PropTypes.func.isRequired,
  badFeedbackIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
