/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { Component } from 'react';
export default class Clear extends Component {
  constructor() {
    super();
    this.state = {};
  }
  clear() {
    console.clear();
  }
  render() {
    return (
      <button onClick={this.clear}>Clear!</button>
    );
  }
}
