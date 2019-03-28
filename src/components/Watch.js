import React from 'react';
import moment from 'moment';

import Strong from './Strong';
import EzTalks from './EzTalks';

export default class Watch extends React.Component {
  state = { time: moment().format("LTS") };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment().format("LTS")
      });
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <>
        <EzTalks title="#eztalks" />
        <Strong>{time}</Strong>
      </>
    );
  }
}
