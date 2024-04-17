import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  
  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('Welcome'); // Navigate to the Welcome screen after login
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image 
          animation="fadeIn"
          duration={2000}
          style={styles.logo}
          source={require('./images.png')}
          resizeMode='cover'
        />
      </View>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.headerText}>You are logged in!</Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'Password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    
  },
  headerText: {
    marginTop: 35,
    fontSize: 33,
    color: '#ffff',
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Italic-VariableFont_wght',
  },
  inputBox: {
    width: '70%',
    marginLeft: '20%',
    height: 43,
    margin: 13,
    paddingHorizontal: 27,
    fontSize: 17,
    backgroundColor: '#ffd700',
    top:10
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ffd700',
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: '20%',
    alignItems: 'center',
    left:20
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default LoginScreen;