import { Component } from 'react';

const React = require('react');
const { View, Text, StyleSheet, Button,FlatList } = require('react-native');
const { Navigation } = require('react-native-navigation');
import APP_2 from './APP_2';
Navigation.registerComponent('APP_2', () => APP_2);




export default class App extends Component {
  _keyExtractor = (item,index) => index;
  componentDidAppear(){
    console.log("componentDidAppear");
  }

  constructor(){
    super();


    this.state = {

      dataArry:this._sourceData
    };
    

  }

 

  
  _sourceData = [
    {name: '基本使用方法'},
    {name: '绣春刀II：修罗战场'},
    {name: '神偷奶爸3'},
    {name: '神奇女侠'},
    {name: '摔跤吧，爸爸'},
    {name: '悟空传'},
    {name: '闪光少女'},
    {name: '攻壳机动队'},
    {name: '速度与激情8'},
    {name: '蝙蝠侠大战超人'},
    {name: '攻壳机动队'},
    {name: '速度与激情8'},
    {name: '蝙蝠侠大战超人'}
  ];

  _item = ({ item }) => {
    return (
        <View >
            <Text>{item.name}</Text>
            {/* <Button onPress={() => this._del(item)} title="delete"></Button> */}
        </View>
    )
}
  render() {

    return (
      <View style={styles.root}>
        {/* <Text>
          homeScreen
        </Text>

      <Button 
        title = 'push App_2 Screen'
        color='#710ce3'
        onPress={()=>{
        Navigation.push(this.props.componentId,{
          component: {
              name:'APP_2',
              options:{
              topBar:{
                title:{
                  text:'APP_2'
                }
              }
            }
          }
        

        });

      
      }
    }/>  */}
      <FlatList style={{
      // backgroundColor:"red",
    
      // flex:1
      
    }}
   

      keyExtractor = {this._keyExtractor}

      data = {this.state.dataArry}

      renderItem = {this._renderItem}
    
    />
    

     

      </View>);
  }


  _renderItem = ({item, index}) => {

    console.log( {item});
    return (
      <View style={{
        left:0,
        right:0
      }}>
       <Text>{item.name}</Text>
     </View>
    );
  }

}



const styles = StyleSheet.create({

  root: {
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // backgroundColor: 'green',
   
  }

});

// export default App;