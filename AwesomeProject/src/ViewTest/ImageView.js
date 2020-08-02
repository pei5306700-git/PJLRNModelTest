import React, {Component} from 'react';

import {
  View,
  Text,
  Image,StyleSheet
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


export default class ImageView extends Component {
  render () {
    return (
      <View style={{backgroundColor:'green',flex:1,alignItems:"center"}}>

        <Image style={imageStyles.image_1}
        onProgress={(e)=>{
            console.log("加载中 IOS专用的");

        }}
        onLoadStart={(e)=>{
            console.log("开始架子啊了哇");

        }}
        onLoadEnd={(e)=>{

          console.log("结束，这个 不一定加载成功");
        }}
        source={{

          uri:'https://reactnative.dev/img/tiny_logo.png'
        }}
        />

      <Image style={imageStyles.image_2}
        source={{
         uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
        }}
        />
        
        <Image style={imageStyles.image_3}
        source={require('../../Images/timg.jpg')}
        />
      </View>
    )
  }
}