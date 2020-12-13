import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { JSONCategoryDokterAnak, JSONList } from '../../assets'
import { List, Gap, Header } from '../../components'
import { Firebase } from '../../config'
import { colors } from '../../utils'

export default function DoctorPerCategory({navigation, route}) {
    const [listDoctor, setListDoctor] = useState ([]);
    const CategoryDoctor = route.params;

    useEffect (() => {
      callDoctorByCategory (CategoryDoctor.text)  
    }, []);

    const callDoctorByCategory = (category) => {
        Firebase
        .database()
        .ref("doctors/")
        .orderByChild("category")
        .equalTo(category)
        .once("value")
        .then(res => {
            console.log ("kategori dokter : ", res.val());
            if (res.val()) {
                const oldData = res.val();
                Object.keys(oldData).map(item => {
                    data.push({
                        id : key,
                        data : oldData[key]
                    })
                })
                setListDoctor (data);
            }
            
        })

    };

    return (
        <View style = {styles.page}> 
            <Header text = {`Pilih ${CategoryDoctor.text}`} type ="dark" onPress = {() => navigation.goBack()} />
            <Gap height = {4} />
            {
                listDoctor.map ((dokter) => {
                    return <List
                    key = {dokter.id}
                    gender = {dokter.data.gender}
                    nama = {dokter.data.fullName}
                    onPress = {() => navigation.navigate ("Chatting")}
                    />
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    }
})
