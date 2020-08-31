/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import {Tab2} from './Tab2';
import {Tab3} from './Tab3';
import {Tab1} from './Tab1';
import {NavHeader} from '../../components';

export class TabScreen extends Component {
  render() {
    return (
      <Container>
        <NavHeader />
        <Tabs
          renderTabBar={() => (
            <ScrollableTab
              tabsContainerStyle={{backgroundColor: '#158467'}}
              underlineStyle={{backgroundColor: 'white', height: '4%'}}
              //   style={{backgroundColor: 'green'}}
            />
          )}>
          <Tab
            activeTextStyle={{fontWeight: 'bold'}}
            textStyle={{color: '#fff7', fontWeight: 'bold'}}
            tabStyle={{backgroundColor: '#158467'}}
            activeTabStyle={{backgroundColor: '#158467'}}
            heading="CHATS">
            <Tab1 />
          </Tab>
          <Tab
            textStyle={{color: '#fff7', fontWeight: 'bold'}}
            activeTextStyle={{fontWeight: 'bold'}}
            tabStyle={{backgroundColor: '#158467'}}
            activeTabStyle={{backgroundColor: '#158467'}}
            heading="STATUS">
            <Tab2 />
          </Tab>
          <Tab
            textStyle={{color: '#fff7', fontWeight: 'bold'}}
            activeTextStyle={{fontWeight: 'bold'}}
            tabStyle={{backgroundColor: '#158467'}}
            activeTabStyle={{backgroundColor: '#158467'}}
            heading="CALLS">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
