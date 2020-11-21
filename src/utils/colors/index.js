const mainColors = {
    green1 : "#0BCAD4",
    green2 : "#EDFCFD",
    dark1 : "#112340",
    dark2 : "#495A75",
    dark3 : "#B1B7C2",
    grey1: "#7D8797",
    grey2: "#E9E9E9",
    grey3 : "#8092AF",
    grey3 : "#EEEEEE",
    grey4 : "#EDEEF0",
    white : "white",
    blue1 : "#0066CB"
};

export const colors = {
    primary :mainColors.green1,
    secondary : mainColors.dark1,
    tertiary : mainColors.green2,
    white : "white",
    black : "black",
    text : {
        primary : mainColors.dark1,
        secondary : mainColors.grey1,
        white : mainColors.white,
        darkGrey : mainColors.grey3,
        inputTextHint : mainColors.dark3,
        labelInActive : mainColors.dark2,
        labelActive : mainColors.green1
    },

    button : {
        primary : {
            background : mainColors.green1,
            text : "white"
        },
        secondary : {
            background : "white",
            text : mainColors.dark1
        },
        active : {
            background : mainColors.blue1
        },
        inactive : {
            background : mainColors.grey4
        }
    },
    border : {
        borderColor : mainColors.grey2,
        borderColorSecondary : mainColors.grey3,
        borderColorActive : mainColors.blue1
    },
    backgroundChatItem : {
        aku : mainColors.green2,
        other : mainColors.green1
    }
};