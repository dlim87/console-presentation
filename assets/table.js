/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Layout, Fill } from 'spectacle';
export default class Table extends Component {
  constructor() {
    super();
    this.state = {};
  }
  tableArray() {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.table(array);
  }
  tableObject() {
    const object = {
      "Captain America": {
        rank: "Captain",
        alias: "Captain America",
        name: "Steve Rogers" },
      "Iron Man": {
        alias: "Iron-man",
        name: "Tony Stark" },
      "War Machine": {
        rank: "Lt Col",
        alias: "War Machine",
        name: "James Rhodes"
      }
    };
    console.table(object)
  }
  render() {
    return (
      <Layout>
        <Fill><button onClick={this.tableArray}>Group Tables!</button></Fill>
        <Fill><button onClick={this.tableObject}> Group Objects!</button></Fill>
      </Layout>
    );
  }
}
