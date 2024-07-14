import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function page() {
    
    const route = useRouter();
    return (
    <View>
      <Text>page</Text>
    </View>
  )
}