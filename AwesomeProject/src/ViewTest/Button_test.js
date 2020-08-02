import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert

} from 'react-native';

const imageStyles = StyleSheet.create({
  image_1:{
    backgroundColor:"red",
    width:100,
    height:200,
       resizeMode:'stretch'
  },
  image_2:{
    backgroundColor:"white",
    width:100,
    height:200,
    marginTop:30,
    resizeMode:'stretch'
  },
  image_3:{
    backgroundColor:"yellow",
        width:100,
        height:100,
        resizeMode:'contain'
  }


});



export default class ButtonClass extends Component {
  constructor(){
    super();
    this.state = {

      ButtonColor:"#841584",
      buttondisabled:true
    }
    
  }


    myButtonClip = ()=>{

      if(this.state.ButtonColor == "#841584"){

        this.setState({
          ButtonColor:"red",
         buttondisabled:false
          
        });

      }else{

        this.setState({
          ButtonColor:"#841584",
           buttondisabled:true

        });
      }
    
      Alert.alert("点击了 改变颜色了哇");

    console.log(this.state.ButtonColor);

  }
  render () {
    return (
      <View style={{backgroundColor:'white',flex:1,alignItems:"center"}}>
    
      <Button 
      title="可以点击的按钮啊"
      color={this.state.ButtonColor}
      accessibilityLabel="accessibilityLabelString"
      onPress={this.myButtonClip} />

      <Button
      style={{
      width:300
      }}
       title="不能点击的按钮啊" 
       color="green"
       disabled={this.state.buttondisabled}
      
        onPress={()=>{

            Alert.alert("不能点击了哇");
          
        }}
      />
      
      </View>
    )
  }
}