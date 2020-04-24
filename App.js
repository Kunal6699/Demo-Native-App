import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import FlatButton from './Button';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
  render() {
  return (
    
    <View style={styles.container}>
      {/* { <View style = {styles.navBar}>
        
      <Image source = {require('./img/yt.png')} style={{width: 98,height: 22}} /> */}
      
    
      
      {/* </View> }  */}
      <View style={styles.body}>
      <View style = {styles.rightNav} >
        <TouchableOpacity>
        <Icon style={styles.navItem} name="keyboard-backspace" size={30} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
        <Icon style={styles.navItem} name="account-circle" size={25} />
        </TouchableOpacity> */}

      </View>
      
      <Image source = {require('./img/kk.jpeg')} style={{width: 200,height: 200,marginTop: 40}} />
      <Text style={styles.hdng}>EMERGENCY</Text>
      <Text style={styles.hdng2}>Rescue animals or call support for pets </Text>
      { <FlatButton text='Book Pet Ambulance' /> }
      { <FlatButton text='Contact Vets' /> }
      { <FlatButton text='Contact Pharmacy' /> }
      <Text style={styles.hdng2}>Or Call us at 800-082-2800 for assistance </Text>

      
      </View>

      <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="home" size={35} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Icon name="whatshot" size={35} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Icon name="control-point" size={45} style={{marginBottom: 20}} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Icon name="local-hospital" size={35} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Icon name="pets" size={35} />
      </TouchableOpacity>

      </View>

      </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: 25,
   backgroundColor: '#f2f2f2'

  },
 navBar:{
   height: 55,
   backgroundColor: 'white',
   elevation: 3,
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: "space-between"
 },
 rightNav: {
   marginLeft: -370,
   marginTop: -5
   
 },
 navItem: {
   marginLeft: 25
 },

 body: {
   flex: 1,
   marginLeft: 30,
   marginRight: 30,
   alignItems: 'center',
   marginTop: 40,
   marginBottom: 40,
   backgroundColor: 'white',
   borderRadius: 70
 },
 main: {
  //  height: 400,
  //  width: 400,
  
 },

 tabBar:
 {
   backgroundColor: 'white',
   height: 60,
   borderTopWidth: 0.5,
   borderColor: '#E5E5E5',
   flexDirection: 'row',
   justifyContent: 'space-around'
 },
 tabItem: {
  alignItems: 'center',
  justifyContent: 'center'
 },

 tabTitle: {
   fontSize: 11,
   color: '#737373'
 },
 hdng: {
   fontWeight: 'bold',
   marginTop: 20,
   fontSize: 30,
   color: '#666666',
   
 },
 hdng2: {
  marginTop: 6,
  color: 'gray',
  // wordSpacing: 30
 }
 

});
