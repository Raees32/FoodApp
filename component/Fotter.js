import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const LittleLemonFooter = () => {
  const route = useRoute(); // Access the current route

  return (
    <View style={footerStyle.viewStyle}>
      <Text style={footerStyle.textStyle}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
};

const footerStyle = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#EE9972',
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default LittleLemonFooter;
