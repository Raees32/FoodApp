import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const FeedBack = ({ navigation }) => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  const submitFeedback = () => {
    // Implement your feedback submission logic here
    // For example, you can send feedback to a server or display a thank you message
    // For now, just display an alert with the feedback data
    Alert.alert(
      'Feedback Submitted',
      `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nFeedback: ${message}`,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
    // Clear input fields after submission
    onChangeFirstName('');
    onChangeLastName('');
    onChangePhoneNumber('');
    onChangeMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder={'First Name'}
          onChangeText={onChangeFirstName}
          clearButtonMode='always'
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder={'Last Name'}
          onChangeText={onChangeLastName}
          clearButtonMode='always'
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          placeholder={'Phone Number'}
          onChangeText={onChangePhoneNumber}
          keyboardType='number-pad'
          clearButtonMode='always'
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder={'Your Feedback'}
          maxLength={200}
          multiline
          clearButtonMode='always'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={submitFeedback} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#ffd700',
    color: 'black',
  },
  messageInput: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#ffd700',
    color: 'black',
    minHeight: 100,
  },
  infoSection: {
    fontSize: 18,
    padding: 20,
    color:'#ffd700',
    textAlign: 'center',
    backgroundColor: 'black',
    fontWeight:"bold"
  },
  headingSection: {
    fontSize: 24,
    padding: 20,
    color:'#ffd700',
    textAlign: 'center',
    backgroundColor: 'black',
    fontWeight:"bold"
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,

  },
  button: {
    backgroundColor: '#8BE225',
    padding: 15,
    borderRadius: 50,
    width: 200,
    alignItems: 'center',
    marginBottom:25,
   
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default FeedBack;