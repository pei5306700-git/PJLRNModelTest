import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView
 
  
} from 'react-native';


const styles = StyleSheet.create({

  loginTitleStyles:{
    fontSize:28,
    textAlign:"center"
    ,top:0,

  
  },
  mainViewStyles:{
    display:"flex",
    backgroundColor:"white",
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-end",
      // alignItems:"center",
  },
  leftTitleStyle:{
    fontSize : 18,
    // width:60,
    // width:100,
    // height:44,
    // backgroundColor:"yellow",
    // textAlign:"center",
  },
  textInputStyle:{
    height:44,
    width:200,
    paddingLeft:10,
    marginRight:20,
   fontSize:18,
  
  }

});




export default class MeScreen extends Component {
  
  constructor(){
    super();

    this.state={
      userName:"",
      passWord:"",

    };

  }


  _onChangeValueWay = (text,kind)=>{
    console.log("text:"  + text + "kind:" + kind );
    if(kind === 0){

      this.setState({
        userName:text
      });
  
    }

    if(kind === 1){
      this.setState({
        passWord:text
      });

    }
  
  }

   MyTextField= ({leftTitle,palaceString,stateValue,withKind})=>(
    <View style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          paddingTop:20,

      }}>

        <View
        style = {{ 
        borderColor:'gray',
        marginTop:0,
        flexDirection:"row",
        borderWidth:1,
        borderRadius:40,
          }}
        >

        <View style={{
          // backgroundColor:"gray",
          marginLeft:20,
          justifyContent:"center",
        }}>
          <Text 
          style={styles.leftTitleStyle}
          >
            {leftTitle}:
            {/* sss */}

          </Text>
          </View >
          <TextInput  style={styles.textInputStyle}
          
           onChangeText= {(text)=>{

             this._onChangeValueWay(text,withKind);
           }}
           autoCompleteType="username"
           placeholder={palaceString}
           value = {stateValue}
        // autoFocus={true}
          />
           </View>
        </View>

  )


 

  
  render () {


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
            palaceString = "请输入用户名称"
            stateValue = {this.state.userName}
            changeWay = {this._onChangeValueWay}
            withKind = {0}
            
            />

      <this.MyTextField 
            leftTitle="密    码"
            palaceString = "请输入密码"
            stateValue = {this.state.passWord}
            withKind = {1}
            />
        </ScrollView>
        
      </SafeAreaView>
    )
  }
}