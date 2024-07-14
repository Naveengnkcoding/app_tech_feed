import { View, Image, Text, SafeAreaView, ImageComponent, TextInput } from 'react-native'
import React  from 'react'
import { Colors } from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
export default function Header() {

  return (
    <View style={{
        padding: 20,
        paddingTop: 52,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        }}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocIIxqPjEQ5oSu31zX9PBG4y8u0lFtLO7fLhnHK0ElZdA_ybHm4=s288-c-no'}}
            style = {{
                width: 45,
                height:  45,
                borderRadius: 99
            }}
            />
            <View>
            <Text style={{
                color: "#ffff"
            }}>Welcome</Text>
            <Text style={{
                color: "#ffff",
                fontSize: 19,
                fontFamily: 'outfit-medium',
            }}>Naveen </Text>
            </View>
        </View>
        <View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                padding: 10,
                backgroundColor: '#fff',
                alignItems: 'center',
                marginVertical: 9,
                marginTop: 15,
                borderRadius: 8,
            }}>
                <Ionicons name="search" size={24} color={Colors.PRIMARY} />
                <TextInput placeholder='Search...'
                style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                }}>
                </TextInput>
            </View>
        </View>
    </View>
  )
}