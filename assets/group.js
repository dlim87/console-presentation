/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { Component } from 'react';
export default class Group extends Component {
  constructor() {
    super();
    this.state = {};
  }
  group() {
    console.clear();
    console.group("first level");
    console.log("level 1.a");
    console.group();
    console.groupCollapsed("collapsed group");
    console.log("level 3a");
    console.log("level 3b");
    console.groupEnd();
    console.log("level 2");
    console.groupEnd();
    console.log("level 1b");
    console.groupEnd();
  }
  render() {
    return (
      <button onClick={this.group}>Group!</button>
    );
  }
}
