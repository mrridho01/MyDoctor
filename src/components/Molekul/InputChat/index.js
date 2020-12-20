import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../Atom'

export default function InputChat({value, onChangeText, onButtonPress}) {
    return (
        <View style = {styles.container}>
            <TextInput 
            style = {styles.inputBox} 
            placeholder = "Tulis pesan untuk dokter hewan mu" 
            value = {value} 
            onChangeText = {onChangeText} 
            />
            <Button 
            type = "button-icon-send" 
            onPress = {onButtonPress} 
            inactive = {value.length < 1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 16,
        backgroundColor : colors.white
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
