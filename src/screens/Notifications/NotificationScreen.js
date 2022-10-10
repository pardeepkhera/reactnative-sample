import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../Notifications/styles';

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Notification Screen</Text>
        </View>
    )
}

export default NotificationScreen;