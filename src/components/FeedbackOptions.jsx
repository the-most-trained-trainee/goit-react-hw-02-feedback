import React from 'react';

const FeedbackOptions = ({goodFeedbackIncrement, neutralFeedbackIncrement, badFeedbackIncrement}) => (
  <ul>
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
  </ul>
);

export default FeedbackOptions;
