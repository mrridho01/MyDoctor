import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ICDoctorActive, ICDoctorInActive, ICHospitalActive, ICHospitalInActive, ICMessageActive, ICMessageInActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function TabItem ({title, active, onPress, onLongPress}) {
    const Icon = () => {
        if (title === "Doctor") {
            return active ? <ICDoctorActive /> : <ICDoctorInActive />
        }
        if (title === "Messages") {
            return active ? <ICMessageActive /> : <ICMessageInActive />
        }
        if (title === "Hospitals") {
            return active ? <ICHospitalActive /> : <ICHospitalInActive />
        }
        return <ICDoctorActive />
    }
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress} onLongPress = {onLongPress}>
            <Icon />
            <Text style = {styles.textLabel (active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems: "center"
    },
    textLabel : (active) => ({
        fontSize : 10,
        fontFamily : fonts.primary[600],
        marginTop : 4,
        color : active ? colors.text.labelActive : colors.text.labelInActive
    })
})
