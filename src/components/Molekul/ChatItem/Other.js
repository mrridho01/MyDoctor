import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter6 } from '../../../assets'
import { colors, fonts } from "../../../utils"
import { Gap } from '../../Atom'

export default function Other() {
    return (
    <View style = {styles.container}>
        <Image source = {DummyDokter6} style = {styles.foto}/>
        <Gap width = {12} />
        <View>
            <View style = {styles.containerChatOther}>
                <Text style = {styles.textOther}>UwU.. kebanyakan makan Royal Canin</Text>
            </View>
        <Text style = {styles.tanggal}>4.45 AM</Text>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems :"flex-end",
        marginBottom : 20,
        paddingHorizontal : 16
    },
    containerChatOther : {
        backgroundColor : colors.backgroundChatItem.other,
        padding : 12,
        paddingRight : 18,
        maxWidth : "80%",
        borderRadius : 10,
        borderBottomLeftRadius : 0,
        color : colors.text.white,
        marginBottom : 8
    },
    textOther : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.white
    },
    tanggal : {
        fontSize : 11,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    },
    foto : {
        height : 30,
        width : 30,
        borderRadius : 30/2
    }
})

