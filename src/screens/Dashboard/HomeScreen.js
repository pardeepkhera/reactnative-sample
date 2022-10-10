import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../Dashboard/HomeScreenStyles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Home Screen</Text>
        </View>
    )
}

export default HomeScreen;