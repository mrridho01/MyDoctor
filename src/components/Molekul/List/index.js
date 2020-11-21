import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyChat1, DummyChat3, DummyDokter4, DummyDokter5, DummyDokter6, IcEditProfile, ICGiveUsrate, ICGoToRightBotton, ICHelpCenter, ICLanguage } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../Atom'

export default function List({nama, gender, onPress, icon}) {
    const Icon = () => {
        if (icon === "editprofile") {
            return <IcEditProfile />
        };
        if (icon === "language") {
            return <ICLanguage />
        };
        if (icon === "giveusrate") {
            return <ICGiveUsrate />
        };
        if (icon === "helpcenter") {
            return <ICHelpCenter />
        };
        return <IcEditProfile />
    };


    const DokterAnak = () => {
        if (nama === "Alexander Jannie") {
            return <Image source = {DummyChat1} style = {styles.foto}/>
        };
        if (nama === "John McParker Steve") {
            return <Image source = {DummyChat3} style = {styles.foto}/>
        };
        if (nama === "Nairobi Putri Hayza") {
            return <Image source = {DummyDokter6} style = {styles.foto}/>
        };
        if (nama === "James Rivillia") {
            return <Image source = {DummyDokter4} style = {styles.foto}/>
        };
        if (nama === "Liu Yue Tin Park") {
            return <Image source = {DummyDokter5} style = {styles.foto}/>
        };
        return <Image source = {DummyChat1} style = {styles.foto}/>
    }
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            {icon ? <Icon/> : <DokterAnak />  }
            <Gap width = {icon ? 16 : 12} />
            <View style = {styles.infoDokter}>
            <Text style = {styles.namaDoktor}>{nama}</Text>
            <Text style = {styles.isiChat}>{gender}</Text>
            
            </View> 
            <Button 
            type = "icon-only" 
            icon = "go-right" 
            style = {styles.panah}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        borderBottomWidth : 1,
        borderBottomColor : colors.border.borderColorSecondary,
        flexDirection : "row",
        padding : 16,
        alignItems : "center",
    },
    foto : {
        height : 46,
        width : 46,
        borderRadius : 46 / 2,
        marginRight : 12
    },
    namaDoktor : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary
    },
    isiChat : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary
    },
    panah : {
      height : 24,
      width : 24  
    },
    infoDokter : {
        flex : 1
    },
    icon : {
        height : 24,
        width : 24,
        marginRight : 16
    }
})
