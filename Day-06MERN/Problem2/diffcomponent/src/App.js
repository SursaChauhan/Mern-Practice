import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []); // Empty dependency array to run only on mount and unmount

  const tick = () => {
    setSeconds(prevSeconds => prevSeconds + 1);
  };

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
};

export default Timer;



// import React, { Component } from 'react';

// class Timer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       seconds: this.state.seconds + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//       </div>
//     );
//   }
// }

// export default Timer;
