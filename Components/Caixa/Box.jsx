import React from "react";
import { Text, StyleSheet, View, Alert, Button, TextInput } from "react-native";

function Box(){
    return(
        <View style={styles.result}>
            <Text style={styles.text}>0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    result:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 150,
        backgroundColor: '#B7C9D0',
    },

    text:{
        color: 'black',
        fontSize: 30,
        marginEnd: 20,
        marginBottom: 10,
    }
})

export default Box