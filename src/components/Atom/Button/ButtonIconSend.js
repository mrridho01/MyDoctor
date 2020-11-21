import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICSendInactive, ICSendActive } from '../../../assets'
import { colors } from '../../../utils'

export default function ButtonIconSend({inactive}) {
    return (
        <View style = {styles.container (inactive)}>
            {inactive && <ICSendInactive />}
            {!inactive && <ICSendActive />}
        </View>
    )
}

const styles = StyleSheet.create({
    container :  (inactive) => ({
        backgroundColor : inactive ? colors.button.inactive.background : colors.button.active.background,
        width : 45,
        height : 45,
        paddingTop : 3,
        paddingRight : 3,
        paddingBottom : 8,
        paddingLeft :8,
        borderRadius : 10
    })
})
