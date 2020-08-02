import React,{} from 'react';
import {View,Text,SafeAreaView,SectionList} from 'react-native';
const DATA = [

    {
        test:"tst1",
        title:"Main Dishes",
        data:['Pizza','Burger','Risotto']
    },
    {
        test:"tst2",
        title:"Main Dishes_2",
        data:['Pizza_2','Burger_2','Risotto_2']
    }

];


const Item = ({title})=>(

    <View style={{backgroundColor:'green'}}>
        <Text>
            {title}
        </Text>
    </View>

);

const SectionListView = () =>{


    return(
            <SafeAreaView>

                <SectionList 
                sections={DATA}
                keyExtractor = {(item,index)=>item + index}
                renderItem = {({item})=><Item title={item}/>}
                renderSectionHeader = {({section:{test}})=>(
                    <Text style={{
                        fontSize:24,
                        backgroundColor:'yellow'
                    }}>
                        {test}
                    </Text>
                )}
                />
            </SafeAreaView>
            );



        }

export default SectionListView;