import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../Atom'

export default function InputChat() {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.inputBox} placeholder = "Tulis pesan untuk dokter hewan mu" />
            <Button type = "button-icon-send" inactive = {true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 16
    },
    inputBox : {
        borderRadius : 10,
        padding : 14,
        backgroundColor : colors.button.inactive.background,
        flex : 1,
        marginRight : 10,
        fontSize : 14,
        fontFamily : fonts.primary[300],
        maxHeight : 45
    },
    send : {
        height : 24,
        width : 24,
    }
})
