import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILHospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function ListHospital({tipe, nama, alamat, foto}) {
    return (
        <View style = {styles.container}>
            <Image source = {foto} style = {styles.foto} />
            <Gap width = {16} />
            <View style = {styles.infoHospital}>
            <Text style = {styles.namaHospital}>{tipe}</Text>
            <Text style = {styles.namaHospital}>{nama}</Text>
            <Gap height = {6} />
            <Text style = {styles.alamatHospital}>{alamat}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        borderBottomColor : colors.border.borderColorSecondary,
        borderBottomWidth : 1,
        padding : 16,
        alignItems : "center"

    },
    foto : {
        width : 80,
        height : 60,
        borderRadius : 20
    },
    namaHospital : {
        fontSize : 16,
        fontFamily : fonts.primary.regular,
        color : colors.text.primary,
    },
    alamatHospital : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    },
    infoHospital : {
        maxWidth : "50%"
    }
})
