import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3, ICRateDoctor, ILUserPhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function RatedDoctor({nama, jabatan, onPress}) {
    const Foto = () => {
        if (nama === "Alexa Rachel") {
            return <Image source = {DummyDokter1} style = {styles.fotoDokter} />
        };
        if (nama === "Sunny Frank") {
            return <Image source = {DummyDokter2} style = {styles.fotoDokter} />
        };
        if (nama === "Poe Minn") {
            return <Image source = {DummyDokter3} style = {styles.fotoDokter} />
        };
        return <Image source = {ILUserPhoto} style = {styles.fotoDokter} />

    };
    return (
        <TouchableOpacity style = {styles.infoDokter} onPress = {onPress}>
            <Foto />
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
        height : 50
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
        color : colors.text.secondary
    },
    rate : {
        flexDirection : "row"
    },
    profileDoctor : {
        flex : 1,
    }
})
