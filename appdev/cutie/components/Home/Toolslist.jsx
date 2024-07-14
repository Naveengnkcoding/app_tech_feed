import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Tool from './Tool'
export default function Toolslist() {

  const toold = [
    {id: 1, tit: 'Resistor', key: 'http://navgosoft.rf.gd/dev/img/t1.png'},
    {id: 2, tit: 'Power', key: 'http://navgosoft.rf.gd/dev/img/t2.png'},
    {id: 3, tit: 'Ohms', key: 'http://navgosoft.rf.gd/dev/img/t3.png'},
    {id: 4, tit: 'Capacitance', key: 'http://navgosoft.rf.gd/dev/img/t4.png'},
  ]

  
  return (
    <View>
        <View style={{
            paddingLeft: 20,
            paddingRight: 15,
            paddingTop: 20,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 20,
                fontFammily: 'outfit',
                fontWeight: 'bold',
            
            }}>Tech Tools</Text>
        </View>
        <View style={{
          paddingLeft: 20,
        }}>
          <FlatList
            data={toold}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(<Tool Category={item}
            />)
            }/>
        </View>       
    </View>
  )
}