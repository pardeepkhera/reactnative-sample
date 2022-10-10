import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../Profile/styles';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Profile Screen</Text>
        </View>
    )
}

export default ProfileScreen;