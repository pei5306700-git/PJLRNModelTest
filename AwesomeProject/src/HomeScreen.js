import React, {Component, useImperativeHandle} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList
  
} from 'react-native';
import { Navigation } from 'react-native-navigation';
export default class HomeScreen extends Component {
  _keyExtractor = (item,index) => index;
  constructor(){
    super();

    this.state = {
      dataSource:this._sourceData
    };
  }
  _sourceData=["imageView",
               "button",
              "View",
            "FatList",
            "SectionList",
          "ActivityIndicatorView",
        "Modal"];


  MyPushWay=(name,text)=>{
    Navigation.push(
      this.props.componentId,{
        component:{
          name:name,
          options:{
            topBar:{
              title:{
                text:text
              }
            },
         
          }
        }

      }
    );

  }

  _onPress=(item,index)=>{

    if(item == this.state.dataSource[0]){
      //imageView 学习啊
      this.MyPushWay("app.ImageViewScreen","ImageView");


    }

    if(item == this.state.dataSource[1]){
      // Button_TestScreen
      this.MyPushWay("app.Button_TestScreen","Button");
      
    }

    if(item == this.state.dataSource[2]){
      // Button_TestScreen
      this.MyPushWay("app.PJLViewScreen","View");
      
    }

    if(item == this.state.dataSource[3]){
      // Button_TestScreen
      this.MyPushWay("app.PJLFlatListScreen",item);
      
    }

    if(item == this.state.dataSource[4]){

      this.MyPushWay("app.SectionListViewScreen",item);

    }

    if(item == this.state.dataSource[5]){

      this.MyPushWay("app.ActivityIndicatorViewScreen",item);
    }

    if(item == this.state.dataSource[6]){

      this.MyPushWay("app.ModelViewScreen",item);
    }


  }

   _remderItem = ({item,index}) =>{

    // console.log("22");
          return(
  
       <TouchableOpacity onPress={() => this._onPress(item,index)}>
         <View>
        <View style={{
          backgroundColor:'white',
          height:88,
          justifyContent:"center"
         }}>
          <Text style={{
            alignSelf:"center",
          fontSize:22}}>
            {item}
          </Text>

        
        </View>
          <View style={{backgroundColor:"black",height:1}}></View>
        </View>
        </TouchableOpacity>
      
        );

  }


  



  render () {
    return (
      <View style={{flex:1}}>
     <FlatList style={{flex:1,backgroundColor:"green"}}
     
     data={this.state.dataSource}
     keyExtractor = {this._keyExtractor}
     renderItem = {this._remderItem}
    
     />
      </View>
    )
  }
}