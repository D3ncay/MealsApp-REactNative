import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

const CategoryGridTile = ({title, color, onPress  }) => {

    // const navigation = useNavigation(); alternative way to use navigation
    return (
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> [styles.button, pressed && styles.buttonPressed]} onPress={onPress}>
                <View style={[styles.innerContainer,{backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black", //iOS from here
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: 0.25, // to here
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex:1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})


export default CategoryGridTile;
