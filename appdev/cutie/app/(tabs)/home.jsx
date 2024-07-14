import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import Header from './../../components/Home/Header'
import Slider from './../../components/Home/Slider'
import Toolslist from '../../components/Home/Toolslist'

export default function home() {
  return (
    <View>
      <Header />
      <Slider />
      <Toolslist />
    </View>
  )
}