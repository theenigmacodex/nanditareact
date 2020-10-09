import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
type Props = {};
export default class Go extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Icon name="ios-search" size={30} color="black" />
          <Text
            style={{
              fontSize: 20,
              borderWidth: 2,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            Search for people or exciting places
          </Text>
          <Icon1 name="menu" size={30} color="black" />
        </View>
        <View styles={styles.mostSearched}>
          <Text style={{fontSize: 23}}>Most Searched</Text>
          <Text
            style={{
              fontSize: 30,
              borderWidth: 2,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            username
          </Text>
          <Text
            style={{
              fontSize: 30,
              borderWidth: 2,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            username
          </Text>
          <Text
            style={{
              fontSize: 30,
              borderWidth: 2,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: 'white',
            }}>
            username
          </Text>
        </View>
        <View styles={styles.middle}></View>
        <View styles={styles.bottomBar}>
          <Text style={{fontSize: 23}}>Messages</Text>
          <Text style={{fontSize: 23}}>Uploads</Text>
          <Text style={{fontSize: 23}}>Notifications</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  middle: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    height: 20,
  },
});
