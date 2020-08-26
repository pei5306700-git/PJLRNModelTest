import React, { Component } from 'react';
import {NativeModules} from 'react-native'
const Spinner = require('react-native-spinkit');

const RNBridge = NativeModules.RNBridge;


import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,


} from 'react-native';


const styles = StyleSheet.create({

  loginTitleStyles: {
    fontSize: 28,
    textAlign: "center"
    , top: 0,


  },
  mainViewStyles: {
    display: "flex",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    // alignItems:"center",
  },
  leftTitleStyle: {
    fontSize: 18,
    // width:60,
    // width:100,
    // height:44,
    // backgroundColor:"yellow",
    // textAlign:"center",
  },
  textInputStyle: {
    height: 44,
    width: 200,
    paddingLeft: 10,
    marginRight: 20,
    fontSize: 18,

  }

});




export default class MeScreen extends Component {

  constructor() {
    super();


    RNBridge.jumpNativePage();
    RNBridge.PJLOneWay("sdadas");
    
    RNBridge.squrareMe("10",(error,num)=>{
    
    });


    this.state = {
      userName: RNBridge.hello,
      passWord: "",

    };

  }


  _onChangeValueWay = (text, kind) => {
    console.log("text:" + text + "kind:" + kind);
    if (kind === 0) {

      this.setState({
        userName: text
      });

    }

    if (kind === 1) {
      this.setState({
        passWord: text
      });

    }

  }

  MyButton = ({ title,
    fontColor,
    fontSize,
    backColor,
    radius,
    width,
    height,onPress }) => (

      <View style={{
        justifyContent: "center",
        // backgroundColor:"yellow",
        flexDirection: "row",
        marginTop: 20
      }}>


        <TouchableOpacity onPress={onPress}>
          <View style={{
            borderRadius: radius,
            backgroundColor: backColor,
            width: width,
            height: height,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{

              fontSize: fontSize,
              color: fontColor,
            }}>
              {title}

            </Text>
          </View>
        </TouchableOpacity>
      </View>

    );

  MyTextField = ({ leftTitle, palaceString, stateValue, withKind }) => (
    <View style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 20,

    }}>

      <View
        style={{
          borderColor: 'gray',
          marginTop: 0,
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 40,
        }}
      >

        <View style={{
          // backgroundColor:"gray",
          marginLeft: 20,
          justifyContent: "center",
        }}>
          <Text
            style={styles.leftTitleStyle}
          >
            {leftTitle}:
            {/* sss */}

          </Text>
        </View >
        <TextInput style={styles.textInputStyle}

          onChangeText={(text) => {

            this._onChangeValueWay(text, withKind);
          }}
          autoCompleteType="username"
          placeholder={palaceString}
          value={stateValue}
        // autoFocus={true}
        />
      </View>
    </View>

  )



  render() {
    return (
      <SafeAreaView style={styles.mainViewStyles}>
        <ScrollView >
          <Text
            style={styles.loginTitleStyles}
          >
            欢迎登录
            </Text>
          <this.MyTextField
            leftTitle="用户名"
            palaceString="请输入用户名称"
            stateValue={this.state.userName}
            changeWay={this._onChangeValueWay}
            withKind={0}

          />

          <this.MyTextField
            leftTitle="密    码"
            palaceString="请输入密码"
            stateValue={this.state.passWord}
            withKind={1}
          />

          <this.MyButton

            title="登 录"
            fontColor="red"
            backColor="green"
            radius={22}
            fontSize={24}
            width={300}
            height={44}
            onPress={()=>{
// https://pjltest.herokuapp.com/todos?title=sss&pjlAdd=22

             let param = {title:this.state.userName,pjlAdd:this.state.passWord};
            fetch(
              "https://pjltest.herokuapp.com/todos",
            {
                method:'POST',
                body:JSON.stringify(param),
                headers:{
                  'Content-Type':'application/json; charset=utf-8'
                }
            }
            ).then(res=>res.json()
            ).then(data=>{

              Alert.alert("请求成功" + JSON.stringify(data));

            }).catch(function(err){
              
              Alert.alert("请求失败" + err);

            })
            }}
          />

        </ScrollView>

       
       <Spinner  
      
       type="Circle"
       isVisible={true}
       size={20}/>

      </SafeAreaView>
    )
  }
}