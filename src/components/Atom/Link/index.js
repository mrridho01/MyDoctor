import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'

export default function Link({text, size, align, onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <Text style = {styles.text(size, align)}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text : (size, align) => ({
        fontFamily: fonts.primary.normal,
        fontSize: size,
        color: colors.text.secondary,
        textDecorationLine: "underline",
        textAlign : align
    })
})
