import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

export default function Chatting({navigation}) {
    return (
        <View style = {styles.page}>
            <Header type = "dark-profile" onPress = {() => navigation.goBack ()}/>
            <View style = {styles.content}>
            <Text style = {styles.date}>Kamis, 19 November 2020</Text>
            <ChatItem isMe />
            <ChatItem />
            {/* <ChatItem isMe/> */}
            </View>
            <InputChat />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    },
    date : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        textAlign : "center",
        marginVertical : 20
    },
    content : {
        flex : 1,
    }
})
