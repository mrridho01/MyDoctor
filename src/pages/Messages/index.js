import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3, ILUserPhoto } from '../../assets'
import { ChatList, Gap } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, getData } from '../../utils'

export default function Messages({navigation}) {
    const getDataUserFromLocal = () => {
        getData ("user").then (res => {
            setUser (res);
        });
    };
   const [user,setUser] = useState ({});
   const [historyChat, setHistoryChat] = useState([]);

    useEffect (() => {
        const urlHistory = `messages/${user.uid}/`;
        getDataUserFromLocal();
        Firebase.database()
        .ref(urlHistory)
        .on("value", snapshot => {
            if(snapshot.val()) {
                console.log("isi snapshot val() : ", snapshot.val());
                const snapShotVal = snapshot.val();
                const historyMessage = [];
                Object.keys(snapShotVal)
                .map(isiChat => {
                    historyMessage.push({
                        id : isiChat,
                        data : snapShotVal[isiChat]
                    });
                })
                console.log("history message : ", historyMessage);
                setHistoryChat(historyMessage);
            };
        })

    }, [user.uid])
    return (
        <View style = {styles.page}>
            <View style = {styles.content}>
                <View style = {styles.titleWrapper}>
                <Text style = {styles.title}>Message</Text>
                <Gap height = {16} />
                </View>
                {
                    historyChat.map (chatDoctors => {
                        return <ChatList 
                        key = {chatDoctors.id}
                        foto = {ILUserPhoto} 
                        nama = {chatDoctors.data.uidPartner} 
                        chat = {chatDoctors.data.lastContentChat}
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
