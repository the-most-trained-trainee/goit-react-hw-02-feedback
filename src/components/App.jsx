import React from 'react';
import FeedBackStats from './FeedBackStats';

class App extends React.Component {



  
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
          good={0}
          neutral={0}
          bad={0}
          total={0}
          positivePercentage={0}
        />
      </div>
    );
  }
}

export default App;
