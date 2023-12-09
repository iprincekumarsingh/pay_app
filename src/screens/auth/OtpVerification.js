import React, {useEffect, useState, useRef} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerification = () => {
  const [buttonBottom, setButtonBottom] = useState(20);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [loading, setLoading] = useState(false);

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
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleTextChange = (text, ref) => {
    if (text.length === 0) {
      switch (ref) {
        case input4Ref:
          input3Ref.current.focus();
          input3Ref.current.clear();
          break;
        case input3Ref:
          input2Ref.current.focus();
          input2Ref.current.clear();
          break;
        case input2Ref:
          input1Ref.current.focus();
          input1Ref.current.clear();
          break;
        // No need to move back for the first digit
        default:
          break;
      }
    } else if (text.length === 1) {
      switch (ref) {
        case input1Ref:
          input2Ref.current.focus();
          break;
        case input2Ref:
          input3Ref.current.focus();
          break;
        case input3Ref:
          input4Ref.current.focus();
          break;
        // No need to move to the next input for the last digit
        default:
          break;
      }
    }
  };

  const handleBackPress = () => {
    // Add any additional logic you may need before navigating back
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
        <Pressable onPress={handleBackPress} style={{padding: 20}}>
          <Ionicons name="arrow-back-sharp" size={30} color="white" />
        </Pressable>

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
          OTP Verification
        </Text>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <Text
            style={{
              color: theme.colors.placeholder,
              fontSize: 16,
              lineHeight: 24,
            }}>
            A 4-digit OTP has been sent to your mobile number via SMS
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TextInput
                ref={input1Ref}
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
                placeholder=""
                placeholderTextColor={'black'}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, input1Ref)}
              />

              <TextInput
                ref={input2Ref}
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
                placeholder=""
                placeholderTextColor={'black'}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, input2Ref)}
              />

              <TextInput
                ref={input3Ref}
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
                placeholder=""
                placeholderTextColor={'black'}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, input3Ref)}
              />

              <TextInput
                ref={input4Ref}
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
                placeholder=""
                placeholderTextColor={'black'}
                maxLength={1}
                keyboardType="numeric"
              />
            </View>
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
            AsyncStorage.setItem('token', 'test');
            
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
            Verify Otp
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;
