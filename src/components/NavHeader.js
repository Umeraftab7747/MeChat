/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
export class NavHeader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#158467',
          width: '100%',
          height: '10%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            width: '70%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: '900',
              marginLeft: 10,
            }}>
            WhatsApp
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'green',
            width: '15%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <Icon name="search" type="evilicon" color="#fff" size={35} />
        </View>
        <View
          style={{
            // backgroundColor: 'yellow',
            width: '15%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <Icon
            name="dots-three-vertical"
            type="entypo"
            color="#fff"
            size={25}
          />
        </View>
      </View>
    );
  }
}
