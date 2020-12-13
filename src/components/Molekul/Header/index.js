import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../../utils'
import { colors } from '../../../utils/colors'
import { Button, Gap } from '../../Atom'
import DarkProfile from './DarkProfile'

export default function Header({text, onPress, type}) {
    if (type === "dark-profile") {
        return <DarkProfile onPress = {onPress}/>
    }
    return (
        <View style = {styles.headerLayout (type)}>
            <Button type = "icon-only" icon = {type === "dark" ? "back-light" : "back-dark"} onPress = {onPress}/>
            <Text style = {styles.text(type)}>{text}</Text>
            <Gap width = {24}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLayout : (type) => ({
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 30,
        alignItems: "center",
        backgroundColor: type === "dark" ? colors.secondary : colors.white,
        borderBottomLeftRadius : type === "dark" ? 20 : 0,
        borderBottomRightRadius : type === "dark" ? 20 : 0,
    }),
    text : (type) => ({
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: type === "dark" ? colors.text.white : colors.text.primary,
        flex: 1,
        textAlign: "center",
        textTransform :"capitalize"
    })
})
