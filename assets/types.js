/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { Component } from 'react';
export default class Types extends Component {
  constructor() {
    super();
    this.state = {};
  }
  types() {
    console.log("normal log");
    console.debug("debug");
    console.info("info");
    console.warn("warn");
    console.error("error");
  }
  render() {
    return (
      <button onClick={this.types}>log this!</button>
    );
  }
}
