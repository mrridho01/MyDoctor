import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyPhotoProfile } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../Atom'

export default function HomeProfile({onPress}) {
    return (
        <View style ={styles.container}>
            <TouchableOpacity onPress = { onPress }>
            <Image source = {DummyPhotoProfile} style = {styles.photoProfile}/>
            </TouchableOpacity>
            <Gap width = {12} />
            <View>
                <Text style ={styles.textUserName} >Shayna Melinda</Text>
                <Text style ={styles.textUserOccupation}>Product Designer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        alignItems : "center"
    },
    photoProfile : {
        width : 46,
        height: 46,
        borderRadius: 46 / 2
    },
    textUserName: {
        fontSize: 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary
    },
    textUserOccupation : {
        fontFamily: fonts.primary.normal,
        fontSize: 12,
        color : colors.text.secondary
    }
})
