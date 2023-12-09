import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import theme from '../../constants/theme';

const Login = ({navigation}) => {
  const [buttonBottom, setButtonBottom] = useState(20);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        const keyboardHeight = event.endCoordinates.height;
        setButtonBottom(keyboardHeight + 2000); // Adjusted the offset
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setButtonBottom(20);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
        {/* Header */}
        <View
          style={{
            padding: 20,
            marginTop: 40,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 80, height: 80, marginBottom: 10}}
            source={require('../../../assets/logo.png')}
          />
          <Text
            style={{
              color: theme.colors.text,
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 28,
            }}>
            Phoenix <Text style={{fontWeight: 'normal'}}>Pay</Text>
          </Text>
        </View>

        {/* Input Section */}
        <Text
          style={{
            fontSize: 22,
            color: theme.colors.text,
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
          Sign Up or Login now!
        </Text>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text
            style={{
              color: theme.colors.placeholder,
              fontSize: 16,
              lineHeight: 24,
            }}>
            Enter your number below. You'll receive an SMS with OTP
          </Text>
          <Text
            style={{
              color: theme.colors.placeholder,
              fontSize: 16,
              lineHeight: 24,
              marginTop: 10,
            }}>
            Mobile Number
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <TextInput
              style={{
                paddingHorizontal: 18,
                paddingVertical: 12,
                width: '25%',
                backgroundColor: '#E8E9EB',
                borderRadius: 8,
                color: 'black',
                fontSize: 18,
              }}
              placeholder="+91"
              placeholderTextColor={'black'}
            />

            <TextInput
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                flex: 1,
                backgroundColor: '#F9F9F9',
                borderRadius: 8,
                color: 'black',
                fontSize: 18,
                borderWidth: 1,
                marginLeft: 10,
              }}
              placeholder="9876543210"
              placeholderTextColor={'black'}
            />
          </View>
        </View>

        {/* Login Button */}
        <Pressable
          style={{
            position: 'absolute',
            bottom: buttonBottom,
            width: '100%',
            alignItems: 'center',
          }}
          onPress={() => {
            // Add your onPress logic here
            navigation.navigate('OTPVerification');
          }}>
          <Text
            style={{
              backgroundColor: theme.colors.btnColor, // Use a secondary color
              padding: 15,
              width: '90%',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              borderRadius: 8,
            }}>
            Login
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
