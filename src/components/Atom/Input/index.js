import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { fonts, colors } from '../../../utils'

export default function Input({title, value, onChangeText, secureTextEntry, disable}) {
    const [border, setBorder] = useState (colors.border.borderColor);
    const onFocusForm = () => {
        setBorder (colors.border.borderColorActive);
    };
    const onBlurForm = () => {
        setBorder (colors.border.borderColor);
    };
    return (
        <View>
            <Text style = {styles.label}>{title}</Text>
            <TextInput 
            onFocus = {onFocusForm} 
            onBlur = {onBlurForm} 
            style = {styles.inputBorder(border)}
            value = {value}
            onChangeText = {onChangeText}
            secureTextEntry = {secureTextEntry}
            editable = {!disable}
            selectTextOnFocus = {!disable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label : {
        fontFamily: fonts.primary.normal,
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
    },
    inputBorder : (border) => ({
        borderRadius: 10,
        borderWidth: 1,
        borderColor: border,
        padding : 12
    })
})

