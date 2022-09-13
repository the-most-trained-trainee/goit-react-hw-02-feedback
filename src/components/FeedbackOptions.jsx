import React from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends React.Component {
  feedbackIncrement = e => {
    const current = e.currentTarget.name;
    const updatedState = this.props.options;
    updatedState[current] += 1;
    this.props.onLeaveFeedback(updatedState);
  };

  render() {
    return (
      <div>
        <button type="button" name="good" onClick={this.feedbackIncrement}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.feedbackIncrement}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.feedbackIncrement}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
