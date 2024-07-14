import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';


export default function Tablayout() {
  return (
    <Tabs screenOptions={{headerShown:false,
    tabBarActiveTintColor: Colors.PRIMARY,
    }}>
      <Tabs.Screen name="home" 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) =><FontAwesome name="home" size={24} color={color} />
      }}/>
      <Tabs.Screen name="new"
      options={{
        tabBarLabel: 'Add New',
        tabBarIcon: ({ color }) =><AntDesign name="pluscircle" size={22} color={color} />
      }}/>
      <Tabs.Screen name="profile"
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) =><FontAwesome5 name="user-shield" size={22} color={color} />
      }}/>
    </Tabs>
  )
}
