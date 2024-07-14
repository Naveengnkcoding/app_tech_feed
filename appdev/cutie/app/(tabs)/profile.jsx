import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <SafeAreaView>
      <View style={{
        justifyContent: 'center',
        height: '100%',
      }}>
        <Text style={{
          color: 'red',
          fontSize: 20,
          fontFamily: 'outfit',
          textAlign: 'center',
        }}>Sorry! Page is Under Construction </Text>
        </View>
    </SafeAreaView>
  )
}