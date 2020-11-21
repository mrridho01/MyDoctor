import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { fonts } from '../../utils'
import { colors } from '../../utils/colors'

export default function GetStarted({navigation}) {
    return (
        <ImageBackground source = {ILGetStarted} style = {styles.page}>
            <View>
            <ILLogo />
            <Text style = {styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title = "Get Started" onPress = {() => navigation.navigate ("Register")  }/>
                <Gap height = {16} />
                <Button title = "Sign In" type = "secondary" onPress = {() => navigation.navigate ("Login") } />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page : {
        padding : 40,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: colors.white
    },
    title : {
        fontFamily: fonts.primary[600],
        fontSize: 28,
        color : colors.text.white,
        marginTop: 91
    }
})
