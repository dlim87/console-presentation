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
      if (i % 2) console.count("odd");
      else console.count("even");
    }
  }
  render() {
    return (
      <button onClick={this.count}>Count!</button>
    );
  }
}
