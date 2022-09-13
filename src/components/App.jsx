import React from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackSubmit = data => {
    this.setState(data);
  };

  countaTotal = () => Object.values(this.state).reduce((x, y) => x + y);

  positivePercentage = () =>
    Math.round((this.state.good * 100) / this.countaTotal());

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackSubmit}
          />
        </Section>
        <Section title="Statistics">
          {this.countaTotal() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countaTotal()}
              positive={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
