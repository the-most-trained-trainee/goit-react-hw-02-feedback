import React from 'react';
import FeedBackStats from './FeedBackStats';

class App extends React.Component {
  defaultData = {
    goodFeedBacks: 0,
    neutralFeedBacks: 0,
    badFeedBacks: 0,
    total: 0,
    positivePercentage: 0,
  };

  state = {
    goodFeedBacks: this.defaultData.goodFeedBacks,
    neutralFeedBacks: this.defaultData.neutralFeedBacks,
    badFeedBacks: this.defaultData.badFeedBacks,
  };

  stateUpdate = arg => {
    this.setState(() => arg);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedBackStats
          feedBackStatistic={this.state}
          total={this.total}
          positivePercentage={this.positivePercentage}
          stateUpdate={this.stateUpdate}
        />
      </div>
    );
  }
}

export default App;
