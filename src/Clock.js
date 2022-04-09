<<<<<<< HEAD
import React from "react";

export default class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>The time is:</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
=======
import React from 'react';

export default class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>The time is:</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
>>>>>>> e81759abaa2af1e7cb3df9cd0c4912b558dd6985
