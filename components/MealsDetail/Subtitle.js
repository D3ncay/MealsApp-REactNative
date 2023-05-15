import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Subtitle = ({ text }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    subtitle: {
        color: '#c2835c',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#c2835c',
        borderBottomWidth: 2
    },
})
export default Subtitle;
