import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const TransactionButton = ({iconName, buttonText, onPress, bgColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Pressable
        style={{
          paddingVertical: 14,
          paddingHorizontal: 25,
          backgroundColor: bgColor,
          borderRadius: 80 / 2,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          gap: 10,
        }}
        onPress={onPress}>
        <View>
          <Feather
            style={{
              borderRadius: 50 / 2,
              borderWidth: 1,
              // padding: 8,
            }}
            name={iconName}
            size={25}
            color="black"
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
            fontWeight: '700',
            fontFamily: 'poppins',
          }}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default TransactionButton;
