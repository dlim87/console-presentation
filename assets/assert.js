/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { Component } from 'react';
export default class Count extends Component {
  constructor() {
    super();
    this.state = {};
  }
  count() {
    console.clear();
    for (let i = 1; i <= 5; i++) {
      console.log(i);
      console.assert(i % 2, i + " is even");
    }
  }
  render() {
    return (
      <button onClick={this.count}>Count!</button>
    );
  }
}
