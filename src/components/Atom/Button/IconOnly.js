import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ICArrowBack, ICArrowBackWhite, ICGoToRightBotton } from '../../../assets';

export default function IconOnly({onPress, icon}) {
    const Icon = () => {
        if (icon === "back-dark") {
            return <ICArrowBack />
        };
        if (icon === "go-right") {
            return <ICGoToRightBotton />
        };
        if (icon === "back-light")
        return <ICArrowBackWhite />
    
};
return (
    <TouchableOpacity onPress = {onPress}>
        <Icon />
    </TouchableOpacity>
)}
