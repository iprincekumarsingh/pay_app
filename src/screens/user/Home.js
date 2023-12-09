import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Topbar from '../../components/Topbar';
import theme from '../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import TransactionButton from '../../components/TranscationBtn';
import Transcation from '../../components/Transcation';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: theme.colors.primary,
        // colors: theme.colors.black,
      }}>
      <Topbar navigation={navigation} />
      {/* Available Credit left */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
