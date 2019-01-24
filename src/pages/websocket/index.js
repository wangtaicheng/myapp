import { subscribeToTimer } from './service/sockservice';

export  default class ShowTimer extends React.Component {
  constructor(props) {
    super(props);
    // subscribeToTimer((err, timestamp) => this.setState({
    //   timestamp
    // }));
  }

  state = { timestamp: 'no timestamp yet' }

  render() {
    return (
      <h1>This is the timer value: {this.state.timestamp}</h1>
    );
  }
}
