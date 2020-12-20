import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3 } from '../../assets'
import { ChatList, Gap } from '../../components'
import { colors, fonts } from '../../utils'

export default function Messages({navigation}) {
   const [doctors, setDoctors] =  useState ([
        {
            id : 1,
            foto : DummyDokter1,
            nama : "Alexander Jaime",
            chat : "Ow..."
        },
        {
            id : 2,
            foto : DummyDokter2,
            nama : "Nairobi Putri Hayza",
            chat : "Yodah"
        },
        {
            id : 3,
            foto : DummyDokter1,
            nama : "John McParker Steve",
            chat : "Misi Kak"
        },
    ])
    return (
        <View style = {styles.page}>
            <View style = {styles.content}>
                <View style = {styles.titleWrapper}>
                <Text style = {styles.title}>Message</Text>
                <Gap height = {16} />
                </View>
                {
                    doctors.map (chatDoctors => {
                        return <ChatList 
                        key = {chatDoctors.id}
                        foto = {chatDoctors.foto} 
                        nama = {chatDoctors.nama} 
                        chat = {chatDoctors.chat}
                        onPress = {() => navigation.navigate ("Chatting")}/>
                    })
                }
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex : 1,
    },
    title : {
       fontSize : 20,
       fontFamily : fonts.primary[600],
       color : colors.text.primary
    },
    titleWrapper : {
        marginTop : 30,
        marginHorizontal : 16
    },
    content : {
        backgroundColor : colors.white,
        flex : 1,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    }
})
