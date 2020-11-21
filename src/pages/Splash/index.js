import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';

export default function Splash({navigation}) {
    useEffect (() => {
        setTimeout (() => {
            navigation.replace ("GetStarted");
        }, 3000);
    } , [navigation]);
    //kalau sudah selesai halaman ini diproses / render
    return (
        <View style = {styles.page}>
            <ILLogo />
            <Text style = {styles.title}>My Doctor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white
    },
    title : {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color : colors.text.primary,
        marginTop: 20
    },

})
