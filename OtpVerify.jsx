// OtpVerify.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import logo from './assets/logo.png'; // adjust path
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const OtpVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const navigation = useNavigation();

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < inputs.length - 1) {
        inputs[index + 1].current.focus();
      } else if (!text && index > 0) {
        inputs[index - 1].current.focus();
      }
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    console.log('OTP Entered:', otpValue);
    navigation.navigate('Home'); 
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Image
          source={logo}
          style={[styles.img, { width: width * 0.5, height: width * 0.5 }]}
          resizeMode="contain"
        />
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputs[index]}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
          <Text style={styles.verifyText}>Verify</Text>
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
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    marginTop: '20%',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  input: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  verifyBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 40,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#000',
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    textAlign: 'center',
  },
  term: {
    color: '#000',
    fontWeight: 'bold',
  },
  privacyNpolicy: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default OtpVerify;
