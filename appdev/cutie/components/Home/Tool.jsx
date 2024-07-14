import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tool({Category, onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(Category)}>
    <View style={{
      width: 80,
      height: 80,
      padding: 5,
      borderRadius: 99,
      marginRight: 12,
      backgroundColor: '#f9f9f9'
    }}>
        <Image style={{
          width: 70,
          height: 70,
          borderRadius: 99,
          justifyContent: 'center',
        }}
        source={{uri:Category.key}} />
    </View>
    <Text style={{
      marginTop: 5,
      textAlign: 'center',
      fontFamily: 'outfit-medium',
      color: 'black',
      fontSize: 16
    }}>{Category.tit}</Text>
    </TouchableOpacity>
  )
}