import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyPhotoProfile, ICMale, ICRemovePhoto, ICFemale } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function Profile({tipe, nama, jabatan, photo, onPress}) {
    const Icon = () => {
        if (tipe === "edituser") {
            return <ICRemovePhoto style = {styles.removePhoto} />
        };
        if (tipe === "dokterperempuan") {
            return (<ICFemale style = {styles.removePhoto} />)
            
        };
        if (tipe === "dokterlakilaki") {
            return <ICMale style = {styles.removePhoto} />
        };
        return (null)
    }
    return (
        <View style = {styles.container}>
            {tipe !== "edituser" && (
            <View style = {styles.containerFoto}>
                <Image source = {photo} style = {styles.foto} />
                <Icon />
            </View>
            )}           
            {tipe === "edituser" && (
            <TouchableOpacity style = {styles.containerFoto} onPress = {onPress}>
                <Image source = {photo} style = {styles.foto} />
                <Icon />
            </TouchableOpacity>
            )}
             <Gap height = {16} />
            {nama && 
            <View style = {styles.profile}>
            <Text style = {styles.nama}>{nama}</Text>
            <Text style = {styles.jabatan}>{jabatan}</Text>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center"
    },
    containerFoto : {
        borderWidth : 1,
        borderColor : colors.border.borderColor,
        height : 130,
        width : 130,
        borderRadius : 130/2,
        justifyContent : "center",
        alignItems : "center"
    },
    foto : {
        height : 110,
        width : 110,
        borderRadius : 110/2,

    },
    nama : {
       fontSize : 20,
       fontFamily : fonts.primary[600],
       color : colors.text.primary,
       marginBottom : 2
    },
    jabatan : {
       fontSize : 16,
       fontFamily : fonts.primary[300],
       color : colors.text.secondary
    },
    removePhoto : {
        position : "absolute",
        bottom : 0,
        right : 0
    },
    profile : {
        alignItems : "center",

    }
})
