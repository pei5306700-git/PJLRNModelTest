import React,{useState } from 'react'
import {Button,Modal,View,Text,TouchableHighlight,Alert} from 'react-native'


const ModelView = () => {

    const [modelVisible,setModelVisible] = useState(false);


    return(
        <View>
            <Modal 
            
            animationType="slide"
            transparent = {true}
            visible={modelVisible}
            onRequestClose={()=>{
                console.log("关闭了哇");

                Alert.alert("Modal has been closed");


            }}

            >

            <View style={{backgroundColor:"red"}}>

                <Text>
                    hellow Word
                </Text>

                <TouchableHighlight
                
                onPress={()=>{

                    setModelVisible(false);
                }}
                >

                    <Text>
                        Hide Modal
                    </Text>
                </TouchableHighlight>
            </View>
            </Modal>

            <TouchableHighlight
            onPress={()=>{
                setModelVisible(true);
            }}>

                <Text>
                    ShowModal
                </Text>
            </TouchableHighlight>

        </View>
    );
}

export default ModelView;