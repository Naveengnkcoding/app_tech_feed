import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

export default function Slider() {

    const imguris = [
        {key: 'http://navgosoft.rf.gd/dev/img/s1.png'},
        {key: 'http://navgosoft.rf.gd/dev/img/s2.png'},
        {key: 'http://navgosoft.rf.gd/dev/img/s3.png'}
      ]

  return (
    <View>
        <Text style={{
            fontSize: 20,
            fontFammily: 'outfit',
            paddingLeft: 20,
            paddingTop: 20,
            marginBottom: 10,
            fontWeight: 'bold',

        }}>
            #Explore New
        </Text>
        <FlatList 
            data={imguris}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                paddingLeft: 20,
                marginRight: 5,
             }}
            renderItem={
               ({item})=>
                <Image style={{
                    width: 250,
                    height: 160,
                    marginRight: 20,
                    borderRadius: 15,
                }} source={{uri:item.key}}/>
                }
        />
    </View>
  )
}