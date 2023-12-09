import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Topbar from '../../components/Topbar';
import theme from '../../constants/theme';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: theme.colors.primary,
        // colors: theme.colors.black,
      }}>
      <Topbar />
      {/* Available Credit left */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            borderRadius: 10,
            width: '100%',
            height: 200,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 600,
              color: '#909090',
              marginTop: 8,
            }}>
            Available Balance
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 38,
              fontWeight: 900,
              fontFamily: 'poppins',
              color: 'black',
              marginTop: 7,
            }}>
            $150.251.00
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 15,
              marginTop: 20,
            }}>
            <Pressable
              style={{
                paddingVertical: 20,
                paddingHorizontal: 50,
                backgroundColor: '#8EE04D',
                borderRadius: 12,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 600,

                  marginTop: 8,
                }}>
                Withdraw
              </Text>
            </Pressable>
            <Pressable
              style={{
                paddingVertical: 20,
                paddingHorizontal: 50,
                backgroundColor: '#8EE04D',
                borderRadius: 12,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 600,

                  marginTop: 8,
                }}>
                Withdraw
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
