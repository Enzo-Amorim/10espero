import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './Style'
import menuIcon from '../../assets/images/menu.svg'

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.FirstView}>
                <Text style={styles.HomeText}>Tela inicial</Text>

            </View>
        </View>
    )
}

export default Home

