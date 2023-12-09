import {View, Text, Pressable} from 'react-native';
import React from 'react';
import theme from '../constants/theme';

const Transcation = ({navigation}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable>
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: 18,
            }}>
            Transcations
          </Text>
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('Transcation')
        }}>
          <Text
            style={{
              color: theme.colors.primary,
              fontSize: 18,
            }}>
            View all
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Transcation;
