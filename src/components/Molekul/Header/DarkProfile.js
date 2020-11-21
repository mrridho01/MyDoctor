import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter6 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../Atom'

export default function DarkProfile({onPress}) {
    return (
        <View style = {styles.container}>
            <Button type = "icon-only" icon = "back-light" onPress = {onPress} />
            <View style = {styles.infoDokter}>
            <Text style = {styles.nama}>Pak Ridho</Text>
            <Text style = {styles.jabatan}>Dokter Hewan</Text>
            </View>
            
            <Image source = {DummyDokter6} style = {styles.foto} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.secondary,
        paddingVertical : 30,
        paddingHorizontal : 16,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    nama : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.white,
        marginBottom : 6
    },
    jabatan : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.darkGrey
    },
    foto : {
        height : 46,
        width : 46,
        borderRadius : 46 / 2
    },
    infoDokter : {
        alignItems : "center"
    }

})
