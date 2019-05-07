// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  GoToAction,
  Layout,
  Fit,
  Fill,
  Code,
  CodePane,
  Appear,
  italic
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Types from '../assets/types';
import Clear from '../assets/clear';
import Group from '../assets/group';
import Table from '../assets/table';
import Count from '../assets/count';
import Assert from '../assets/assert';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} goTo={1}>
          <Heading size={1} textColor="secondary">
             Logging Out:
          </Heading>
          <Heading size={2} textColor="secondary">
           Using the other Console Comands
          </Heading>
          <Layout>
            <Fill>
              <Heading size = {4} textColor="tertiary">View on GITHUB HERE</Heading>
            </Fill>
            <Fill>
              <Heading textColor="tertiary" size = {6}>Daniel Lim</Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} goTo={2} id="info">
          <Heading>Info, Debug, Warn, and Error</Heading>
          <List>
            <ListItem>Variants of console.log()</ListItem>
            <ListItem>Implimentation varies by browser</ListItem>
            <ListItem>Can be filtered</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} goTo={3} id="infoCode">
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/types.example')}
            margin="20px auto"
            textSize={40}
          />
          <Types />
        </Slide>

        <Slide transition={['fade']} goTo={4} id="clear">
          <Heading>Clear</Heading>
          <Text><Code>console.clear()</Code> clears the console</Text>
          <Clear />
        </Slide>
        
        <Slide transition={['fade']} goTo={5} id="group">
          <Heading>Group</Heading>
          <List>
            <ListItem><Code>console.group()</Code> creates a collapseable, inline group</ListItem>
            <ListItem>Can be repeated to go a layer deeper</ListItem>
            <ListItem><Code>console.groupEnd()</Code> escapes a single level</ListItem>
            <ListItem><Code>console.groupCollapsed()</Code> creates a collapsed grouping</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} goTo={6} id="groupCode">
          <CodePane lang="jsx"
            source={require('raw-loader!../assets/group.example')}
            margin="20px auto"
            textSize={30}
          />
          <Group />
        </Slide>

        <Slide transition={['fade']} goTo={7} id="table">
          <Heading>Table</Heading>
          <List>
            <ListItem>Creates a 2d table</ListItem>
            <ListItem>Can take arrays or objects</ListItem>
            <ListItem>Can sort by column (browser dependent)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} goTo={8} id="tableCode">
          <CodePane lang="jsx"
            source= {require('raw-loader!../assets/table.example')}
            margin= "20px auto"
            textSize={24}
          />
          <Table />
        </Slide>

        <Slide goTo={9} id="Count">
          <Heading>Count</Heading>
          <List>
            <ListItem><Code lang="jsx">console.count()</Code> increments count</ListItem>
            <ListItem><Code lang="javascript">console.countReset()</Code> resets count</ListItem>
            <ListItem>Can pass an argument to label counts</ListItem>
            <ListItem>Starts at 1!</ListItem>
          </List>
          <CodePane lang="jsx"
            source= {require('raw-loader!../assets/count.example')}
            margin= "20px auto"
            textSize={24}
          />
          <Count />
        </Slide>

        <Slide goTo={10} id="Assert">
          <Heading>Assert</Heading>
          <List>
            <ListItem>Takes at least 2 arguments: an assertion and a message</ListItem>
            <ListItem>Only logs if the assertion is FALSE</ListItem>
          </List>
          <CodePane lang="jsx"
            source= {require('raw-loader!../assets/assert.example')}
            margin= "20px auto"
            textSize={24}
          />
          <Assert />
        </Slide>

        <Slide goTo={11} id="Styling">
          <Heading>Styling</Heading>

        </Slide>

        <Slide goTo={'last'}>
          <Heading size= {6} textColor="secondary">
            Another slide!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
