import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
 
  
} from 'react-native';


const styles = StyleSheet.create({

  loginTitleStyles:{
    fontSize:28,textAlign:"center"
  },
  mainViewStyles:{
    backgroundColor:"red",flex:1
  }

});



export default class MeScreen extends Component {
  render () {
    return (
      <SafeAreaView style={styles.mainViewStyles}>
        <View>
          <Text 
          style={styles.loginTitleStyles}
          >
            欢迎登录
            </Text>
        </View>
      </SafeAreaView>
    )
  }
}