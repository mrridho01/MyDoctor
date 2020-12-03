import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyPhotoProfile, ILUserPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'
import { Gap } from '../../Atom'

export default function HomeProfile({onPress}) {
    const [profile, setProfile] = useState ({
        photo : ILUserPhoto,
        fullName : "",
        pekerjaan : "" 
    });

    useEffect (() => {
        getData('user')
        .then(res => {
            const data = res;
            data.photo = {uri : res.photo};
            setProfile(data);
        });
    }, []);
    return (
        <View style ={styles.container}>
            <TouchableOpacity onPress = { onPress }>
            <Image source = {profile.photo} style = {styles.photoProfile}/>
            </TouchableOpacity>
            <Gap width = {12} />
            <View>
                <Text style ={styles.textUserName}>{profile.fullName}</Text>
                <Text style ={styles.textUserOccupation}>{profile.pekerjaan}</Text>
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
        color : colors.text.primary,
        textTransform : "capitalize"
    },
    textUserOccupation : {
        fontFamily: fonts.primary.normal,
        fontSize: 12,
        color : colors.text.secondary,
        textTransform : "capitalize"
    }
})
