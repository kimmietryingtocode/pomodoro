import React from "react";
import { StyleSheet, Text, View } from 'react-native';
type Props = {
    timerDate: Date;
}

export const TimerCountDisplay: React.FC<Props> = ({timerDate}) => {
    return (
        <View>
            <Text>{timerDate.getMinutes().toString().padStart(2,"0")}:{timerDate.getSeconds().toString().padStart(2,"0")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TimerCountDownText: {
        fontSize: 40,
        fontWeight: '800',
        color: "#fff"
    }
})