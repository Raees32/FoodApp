import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  LittleLemonHeader =() => {
  return (
    <View style={Lemonstyles.viewstyle}>
      <Text
        style={Lemonstyles.textstyle}
    >
        Little Lemon 
        
      </Text>
    </View>



  );
}
const Lemonstyles = StyleSheet.create({
viewstyle:{
   flex:0.1, backgroundColor: '#EE9972' ,


},
textstyle:{
   padding: 18, fontSize: 23, color: 'black',textAlign:'center',fontWeight: 'bold',
},
});
export default LittleLemonHeader;

