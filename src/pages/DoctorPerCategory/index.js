import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { JSONCategoryDokterAnak, JSONList } from '../../assets'
import { List, Gap, Header } from '../../components'
import { colors } from '../../utils'

export default function DoctorPerCategory({navigation}) {
    return (
        <View style = {styles.page}> 
            <Header text = "Pilih Dokter Anak" type ="dark" onPress = {() => navigation.goBack()} />
            <Gap height = {4} />
            {
                JSONCategoryDokterAnak.dokterAnak.map (DokterAnak => {
                    return <List
                    key = {DokterAnak.id}
                    gender = {DokterAnak.gender}
                    nama = {DokterAnak.nama}
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
