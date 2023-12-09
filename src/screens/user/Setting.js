import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingOption = ({ icon, text, onPress, iconPackage }) => {
  const IconComponent = iconPackage || AntDesign || Ionicons;

  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={styles.option}>
        <View style={styles.optionIcon}>
          <IconComponent name={icon} size={24} style={styles.icon} />
        </View>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Setting = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Utils</Text>

      <SettingOption
        icon="calculator"
        text="Loan Calculator"
        onPress={() => navigation.navigate('LoanCalculator')}
      />

      <SettingOption icon="bells" text="Push Notifications" />
      <SettingOption icon="eyeo" text="Privacy & Policy" />
      <SettingOption icon="lock" text="Security" />

      <Text style={styles.heading}>More</Text>

      <SettingOption icon="staro" text="Support & Help Section" />
      <SettingOption icon="questioncircleo" text="Feedback " />

      <Text style={styles.heading}>Settings</Text>
      <SettingOption icon="logout" text="Logout" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // padding: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
    marginBottom: 10,
  },
  optionContainer: {
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
  },
  optionIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89d74d',
    borderRadius: 20,
    marginRight: 15,
  },
  icon: {
    color: '#fff',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333',
  },
});

export default Setting;
