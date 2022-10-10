import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../Settings/styles';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen;