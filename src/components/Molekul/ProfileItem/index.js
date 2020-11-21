import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function PofileItem({label, description}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>{label}</Text>
            <Text style = {styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    },
    description : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.primary
    },
    container : {
        padding : 16,
        borderBottomColor : colors.border.borderColorSecondary,
        borderBottomWidth : 1
    }
})
