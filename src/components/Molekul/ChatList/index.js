import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function ChatList({foto, nama, chat, onPress}) {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <Image source = {foto} style = {styles.foto}/>
            <Gap width = {12} />
            <View>
            <Text style = {styles.namaDoktor}>{nama}</Text>
            <Text style = {styles.isiChat}>{chat}</Text>
            </View> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        borderBottomWidth : 1,
        borderBottomColor : colors.border.borderColorSecondary,
        flexDirection : "row",
        padding : 16,
        alignItems : "center"
    },
    foto : {
        height : 46,
        width : 46,
        borderRadius : 46 / 2
    },
    namaDoktor : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary
    },
    isiChat : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    }
})
