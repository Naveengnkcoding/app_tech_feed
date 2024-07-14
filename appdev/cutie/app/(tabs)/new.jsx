import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import WebView from 'react-native-webview';

export default function add() {
  
  const router = useRouter();

  return (
    <WebView
    bounces={false}
    androidLayerType='hardware'
    javaScriptEnabled={true}
    scrollEnabled={false}
    nestedScrollEnabled={false}
   c   style={{
        marginTop: 30,
      }}
      source={{ uri: 'https://techfeedapp.web.app/' }}
    />
  )
}