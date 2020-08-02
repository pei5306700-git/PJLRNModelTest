import React,{Component,useState} from 'react'
import { SafeAreaView,View,FlatList,Text, TouchableOpacity, Platform } from 'react-native';


// https://reactnative.dev/docs/flatlist#docsNav
const DATA = [
    {id:'id_1',title:'_1'},
    {id:'id_2',title:'_2'},
    {id:'id_3',title:'_3'}
]


const PJLFlatList = ()=>{

  const [selectedId,setSelectedId] = useState(0);

  const [longding,setLoding] = useState(1);
  
    const renderItem = ({item})=>(
        <Item title={item.id}/>
    );

    const Item = ({title})=>{
   
        return(
            <View style={{
                // height:100,
                // flex:1,
                backgroundColor:selectedId == title ?"#6e3b6e":"red",
                // alignItems:'center',
                
                
                }}>
                <TouchableOpacity onPress={() =>{ 
                    
                    setSelectedId(title);
                    if(longding === "1"){
                        setLoding("0");
                    }else{
                        setLoding("1");
                    }
                   
                
                      console.log(selectedId)
                }}>
                <View style={{
                    // flex:1, 
                    // height:100,
                    // width:100,
                    backgroundColor:'yellow'}}>

                <Text style={{
                    fontSize:30,
                    flex:1,
                    backgroundColor:'white',
                   textAlign:"center"
                    
                
                }}>

                    {title}
                </Text>
                </View>
                </TouchableOpacity>
            </View>
        )}


    return(
        <SafeAreaView style={{flex:1}}>

            <FlatList 
            ItemSeparatorComponent={()=>(
               //自定义分割线啊
               <View
               style={{
                   height:1,
                   backgroundColor:'purple'
               }}>

               </View>)
               }

               ListFooterComponent={()=>(

                <View>
                    <Text>
                        我是FootView 
                    </Text>
                </View>
               )}
               ListHeaderComponent={()=>(

                <View>
                    <Text>
                        我是HeadView 
                    </Text>
                </View>
               )}

               ListEmptyComponent={()=>(
                   <View>
                       <Text>
                           数据为空啦！ 不存在的！
                       </Text>
                   </View>


               )}
            onRefresh={()=>{
                //刷新走的方法
                console.log('刷新了啊')
            }}

            getItemLayout={(data,index)=>(

                { length: 100,offset:100 * index, index:index}
                    
             )}
            refreshing={longding === "1" ? true : false}
            horizontal = {false}
            data={DATA}
            renderItem = {renderItem}
            keyExtractor = {item => item.id }
            extraData={selectedId}

            />



        </SafeAreaView>
    );
}


export default PJLFlatList;