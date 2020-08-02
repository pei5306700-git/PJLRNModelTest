import React from 'react';
import {ActivityIndicator,Text,View} from 'react-native';

const  ActivityIndicatorView = () =>{


    return(
      <View>

          <ActivityIndicator />

          <ActivityIndicator size="large"/>

          <ActivityIndicator size="large" color="#0000ff"/>

          <ActivityIndicator size="large" color="#00ff00"/>




     </View>
     );
}

export default ActivityIndicatorView;