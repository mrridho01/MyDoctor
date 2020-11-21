import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../Atom'
import { ILDokterAnak, ILDokterObat, ILDokterUmum, ILPsikiater } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorType({text, tipe, onPress}) {
    const Icon = () => {
        if (tipe === "DokterUmum") {
            return <Image source = {ILDokterUmum} style = {styles.iconDoctor}/>
        };
        if (tipe === "Psikiater") {
            return <Image source = {ILPsikiater} style = {styles.iconDoctor}/>
        };
        if (tipe === "DokterAnak") {
            return <Image source = {ILDokterAnak} style = {styles.iconDoctor}/>
        };
        if (tipe === "DokterObat") {
            return <Image source = {ILDokterObat} style = {styles.iconDoctor}/>
        };
        return <Image source = {ILDokterUmum} style = {styles.iconDoctor}/>
    }
    return (
        <TouchableOpacity style = {styles.wrapper} onPress = {onPress}>
            <Icon tipe = {tipe}/>
            <Gap height = {28} />
            <View>
                <Text sytle = {styles.sayaButuh}>saya butuh</Text>
                <Text style = {styles.dokter}>{text}</Text>
            </View>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    iconDoctor : {
        height : 46,
        width : 46,
        borderRadius : 46 / 2
    },
    wrapper : {
        padding : 12,
        backgroundColor : colors.tertiary,
        borderRadius : 10,
        alignSelf : "flex-start",
        width : 100,
        height : 130,
        marginRight : 10
    },
    sayaButuh : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.primary
    },
    dokter : {
        fontSize : 12,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    }
})
