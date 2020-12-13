import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyChat1, DummyChat3, DummyDokter4, DummyDokter5, DummyDokter6, IcEditProfile, ICGiveUsrate, ICGoToRightBotton, ICHelpCenter, ICLanguage, ILUserPhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../Atom'

export default function List({nama, gender, onPress, icon, photo}) {
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


    const Dokter = () => {
        if (photo === undefined) {
            return (<Image source = {ILUserPhoto} style = {styles.foto}/>);
        } else {
            return (<Image source = {photo} style = {styles.foto}/>);
        }
    };
    
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            {icon ? <Icon/> : <Dokter />  }
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
        color : colors.text.secondary,
        textTransform : "capitalize"
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
