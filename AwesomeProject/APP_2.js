import React, { Component, useState } from 'react';
import { Text, TextInput, View, ColorPropType,StyleSheet,Button, Alert, TouchableHighlight, ScrollView, FlatList, SectionList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { create } from 'react-test-renderer';


const styles = StyleSheet.create({
rootView:{
    flexDirection:'row',//横向排列
    height:100,
    marginTop:40
},
viewOne:{
    backgroundColor:'blue',
    flex:0.4 //view 1 的伸缩因子，占用总长度的40%
},
viewTwo:{
    backgroundColor:'red',
    flex:0.6//view 1 的伸缩因子，占用总长度的60%

}

})

onLayout = event =>{

    let {width,height} = event.nativeEvent.layout
    console.log("view width: " + width);
    console.log("view Height:" + height)

    

}

// export default class App_2 extends Component{
//     constructor(props){
//         super(props);
//       }
//     render(){
//         return(
//             <View style={{flex:1}}>
//                <Text>Settings Screen</Text>
//                  </View>

//         );
//     }
// }

const App_2 = (props) => {
    return (
      <View style={styles.root}>
        <Text>App_2</Text>
      </View>
    );
  }

class ChildComponment extends Component{

    render(){

        return(
        <Text>hellowChildren {this.props,name}!</Text>
        );
    }
}
export default App_2;