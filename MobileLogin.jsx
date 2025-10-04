// MobileLogin.tsx
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';

import logo from './assets/logo.png'; 
import { useNavigation } from '@react-navigation/native';

const MobileLogin = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  const handleOtp = () => {
    navigation.navigate('OtpVerify'); // make sure this screen exists in your navigator
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Image style={styles.img} source={logo} />
        <TextInput
          maxLength={10}
          style={styles.input}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter Mobile Number"
        />
        <TouchableOpacity style={styles.verifyBtn} onPress={handleOtp}>
          <Text style={styles.verifyText}>Proceed</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>
          By continuing, you agree to our{' '}
          <Text style={styles.term}>Terms of Use</Text> &{' '}
          <Text style={styles.privacyNpolicy}>Privacy Policy</Text>.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    marginTop: '40%',
    width: '80%',
    resizeMode: 'contain',
  },
  input: {
    borderColor: 'gray',
    height: 60,
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 14,
    borderWidth: 1,
    marginTop: 40,
  },
  verifyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 40,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    textAlign: 'center',
  },
  term: {
    color: '#000000',
    fontWeight: 'bold',
  },
  privacyNpolicy: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default MobileLogin;
