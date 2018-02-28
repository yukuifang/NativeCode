/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    };
  }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              selectedTitleStyle={{color:'red'}}
              title="Home"
              renderIcon={() => <Image style={styles.icon} source={require('./res/images/wode.jpg')} />}
              renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/wode.jpg')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              selectedTitleStyle={{color:'blue'}}
              title="Profile"
              renderIcon={() => <Image style={styles.icon} source={require('./res/images/wode.jpg')} />}
              renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/wode.jpg')} />}

              onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red'
  },
  page2:{
    flex:1,
    backgroundColor:'blue'
  },
  icon:{
    width:22,
    height:22
  }

});
