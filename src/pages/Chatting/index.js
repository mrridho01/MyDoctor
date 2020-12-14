import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

export default function Chatting({navigation, route}) {
    const dataDoctor = route.params;
    return (
        <View style = {styles.page}>
            <Header 
            type = "dark-profile" 
            onPress = {() => navigation.goBack ()} 
            nama = {dataDoctor.data.fullName} 
            jabatan = {dataDoctor.data.profession} 
            photo = {{uri : dataDoctor.data.photo}}
            />
            <View style = {styles.content}>
                <ScrollView showsVerticalScrollIndicator = {false} >
                <Text style = {styles.date}>Kamis, 19 November 2020</Text>
                <ChatItem isMe />
                <ChatItem />
                {/* <ChatItem isMe/> */}
                </ScrollView>
            </View>
            <InputChat 
            value = ""
            onChangeText = {() => alert ("Anda mengetikkan sesuatu")}
            onButtonPress = {() => alert ("Anda memencet tombol send")}  
            />
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
