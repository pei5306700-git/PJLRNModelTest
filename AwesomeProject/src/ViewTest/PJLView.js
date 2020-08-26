import React,{Component} from 'react';
import {View,Text, TouchableOpacity,Alert} from "react-native";



export default class PJLView extends Component{

    constructor(){
        super();
    }


    render(){

        return(
               <View style={{
                flexDirection:'row',
                height:100,
                padding:20
            }}>
             
 
             <View style={{backgroundColor:'blue',flex:0.3}}>

                    <TouchableOpacity style={{flex:1}}
                onPress={()=>{
                Alert.alert("点击了啊");

                }}
                onLongPress={()=>{

                    Alert.alert("长按了啊");
                }}
                >
                    </TouchableOpacity>
             </View>
             

              <View
                  style = {{backgroundColor:"red",flex:0.5}}
              ></View>
              <Text>
                  helllowWord
              </Text>
            
            </View>
        );
    }
    
}

