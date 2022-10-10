import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    mainView: {
        alignSelf: 'center',
        marginTop: 10
    },
    imageView: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 300
    },
    textInputStyle: {
        marginTop: 40,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 2,
        alignSelf: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
    },
    btnImage: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
        alignSelf: 'center',
        right: 10,
    },
    loginView: {
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 4,
        width: '80%',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#8338bb',
        marginTop: 50,
    },
    loginText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
    },
})

export default styles;