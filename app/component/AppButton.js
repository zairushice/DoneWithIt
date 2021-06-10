import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, color = 'close' }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.close,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 15
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export default AppButton;