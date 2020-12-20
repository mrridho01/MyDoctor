import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ILNews1 } from "../../../assets"
import { Gap } from '../../Atom'

export default function NewsItem({text, time, image}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.titleWrapper}>
            <Text style = {styles.title}>{text}</Text>
            <Gap height = {4} />
            <Text style = {styles.time}>{time}</Text>
            </View>
            <Image source = {{uri : image}} style = {styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        maxWidth : "90%"
    },
    time : {
        fontSize : 12,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary
    },
    container : {
        flexDirection: "row",
        borderBottomColor : colors.border.borderColorSecondary,
        borderBottomWidth : 1,
        padding : 16
    },
    image : {
        width : 80,
        height : 60,
        borderRadius : 11
    },
    titleWrapper : {
        flex : 1,
        paddingBottom : 12,
    }

})
