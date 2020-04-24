import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default function FlatButton({text}) {
      return(
          <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{text}
                
                </Text>
                <View style={styles.tab}>
                <Icon style={styles.shp} name="arrow-forward" size={25} />
                </View>
              
            
              
               
              </View>
             
          </TouchableOpacity> 
      )
  }

  const styles = StyleSheet.create({
      button: {
          marginTop: 10,
          borderRadius: 40,
          paddingVertical: 14,
          paddingHorizontal: 10,
          backgroundColor: '#00b3b3',
          width: 300,
          
          flexDirection: 'row',
          marginBottom: 5,
          justifyContent: 'space-between'
      },
      buttonText: {
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: 5,
          alignContent: 'center',
          justifyContent: 'space-around',
          marginLeft: 40
      },
      tab: {
            alignContent: 'center',
            marginTop: 3,
            marginLeft: 30,
            marginBottom: 5,
            //marginRight: 40,
            color: 'white'
      },
      shp: {
          color: 'white',
          marginRight: 0
      }
  })