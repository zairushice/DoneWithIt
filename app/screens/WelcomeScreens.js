import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../component/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}>Sell What You Don't Need Anymore.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='login' color='close'></AppButton>
                <AppButton title='register' color='delete'></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagLine: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        textTransform: 'capitalize',
    }
})

export default WelcomeScreen;