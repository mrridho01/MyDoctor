import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3, ICRateDoctor, ILUserPhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function RatedDoctor({nama, jabatan, onPress, photo}) {
    return (
        <TouchableOpacity style = {styles.infoDokter} onPress = {onPress}>
            <Image source = {photo} style = {styles.fotoDokter} />
            <Gap width = {12} />
            <View style = {styles.profileDoctor}>
                <Text style = {styles.namaDokter}>{nama}</Text>
                <Gap height = {2} />
                <Text style = {styles.occupationDokter}>{jabatan}</Text>
            </View>
            <View style = {styles.rate}>
                <ICRateDoctor />
                <Gap width = {4} />
                <ICRateDoctor />
                <Gap width = {4} />
                <ICRateDoctor />
                <Gap width = {4} />
                <ICRateDoctor />
                <Gap width = {4} />
            <   ICRateDoctor />
            </View>

        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    fotoDokter : {
        width : 50,
        height : 50,
        borderRadius : 50/2
    },
    infoDokter : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginBottom : 16
    },
    namaDokter : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    },
    occupationDokter : {
        fontSize : 12,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        textTransform :"capitalize"
    },
    rate : {
        flexDirection : "row"
    },
    profileDoctor : {
        flex : 1,
    }
})
