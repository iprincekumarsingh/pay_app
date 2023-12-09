import {View, Text, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Topbar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Function to get the current date and update the state
    const updateCurrentDate = () => {
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString(undefined, {weekday: 'long'});
      const date = now.getDate();
      const month = now.toLocaleDateString(undefined, {month: 'long'});
      setCurrentDate(`${dayOfWeek}, ${date} ${month}`);
    };

    // Initial call to set the current date
    updateCurrentDate();

    // Update the current date every minute
    const intervalId = setInterval(updateCurrentDate, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        // elevation: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 55,
            height: 55,
            borderRadius: 30, // Use half of the width/height for a perfect circle
            marginLeft: 6,
          }}
          source={require('../../assets/profile.jpeg')}
        />

        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Hi Prince....
          </Text>
          <Text style={{fontSize: 14, color: 'grey'}}>{currentDate}</Text>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => alert('Pressed!')}
          style={{
            // backgroundColor: '#e7e7e7',
            padding: 10,
            borderWidth: 1,
            borderRadius: 50,
          }}>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Topbar;
