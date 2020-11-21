import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from "../../../utils"

export default function IsMe() {
    return (
        <View style = {styles.container}>
            <View style = {styles.containerChatAku}>
            <Text style = {styles.textAku}>Dokter, kucing saya pipinya makin gendut terus perutnya makin lebar</Text>
            </View>
            <Text style = {styles.tanggal}>4.20 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems :"flex-end",
        marginBottom : 20,
        paddingHorizontal : 16
    },
    containerChatAku : {
        backgroundColor : colors.backgroundChatItem.aku,
        padding : 12,
        paddingRight : 18,
        maxWidth : "80%",
        borderRadius : 10,
        borderBottomRightRadius : 0,
        marginBottom : 8

    },
    textAku : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.primary,

    },
    tanggal : {
        fontSize : 11,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    }
})
