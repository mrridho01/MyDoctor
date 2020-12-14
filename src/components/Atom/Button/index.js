import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'
import ButtonIconSend from './ButtonIconSend'
import IconOnly from './IconOnly'

export default function Button({type, title, onPress, icon, inactive, disable}) {
    if (type === "button-icon-send") {
        return <ButtonIconSend inactive = {inactive} onPress = {onPress}/>
    };
    if ( type === "icon-only") {
        return <IconOnly icon ={icon} onPress = {onPress}/>
    };
    if (disable) {
        return (
            <View style ={styles.disableButton}>
                <Text style = {styles.textDisableButton}>{title}</Text>
            </View>
        )
    };
    return (
        <TouchableOpacity style ={styles.container (type)} onPress = {onPress}>
            <Text style = {styles.text (type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : (type) => ({
        backgroundColor: type === "secondary" ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    text : (type) => ({
        fontFamily: fonts.primary[600],
        fontSize: 18,
        textAlign: "center",
        color: type === "secondary" ? colors.button.secondary.text : colors.button.primary.text
        
    }),
    disableButton : {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor : colors.button.inactive.background
    },
    textDisableButton : {
        fontFamily: fonts.primary[600],
        fontSize: 18,
        textAlign: "center",
        color : colors.text.inputTextHint
    }
})