import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILCoverHospital, ILHospital1, ILHospital2, ILHospital3 } from '../../assets'
import { Gap } from '../../components'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

export default function Hospitals() {
    return (
        <View style = {styles.pageBackGround}>
            <ImageBackground source = {ILCoverHospital} style = {styles.background}>
            <Text style = {styles.nearbyHospital}>Nearby Hospital</Text>
            <Text style = {styles.tersedia}>3 tersedia</Text>
            </ImageBackground>
            <View style = {styles.contentBackGround}>
            <Gap height = {14} />
            <ListHospital tipe = "Rumah Sakit" nama = "Citra Bunga Merdeka" alamat = "Jln. Surya Sejahtera 20" foto = {ILHospital1} />
            <ListHospital tipe = "Rumah Sakit Anak" nama = "Happy Family & Kids" alamat = "Jln. Surya Sejahtera 20" foto = {ILHospital2} />
            <ListHospital tipe = "Rumah Sakit Jiwa" nama = "Tingkatan Paling Atas" alamat = "Jln. Surya Sejahtera 20" foto = {ILHospital3} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background : {
        height : 240,
        paddingTop : 30
    },
    pageBackGround : {
        backgroundColor : colors.secondary,
        flex : 1,
    },
    nearbyHospital : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.white,
        textAlign : "center",
        marginBottom : 6
    },
    tersedia : {
        fontSize : 14,
        fontFamily : fonts.primary[300],
        color : colors.text.white,
        textAlign : "center"
    },
    contentBackGround : {
        backgroundColor : colors.white,
        marginTop : -30,
        borderRadius : 20,
        flex : 1
    }
})
