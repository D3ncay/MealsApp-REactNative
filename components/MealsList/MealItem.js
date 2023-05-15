import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import MealDetails from '../MealDetails';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress, id }) => {
// To navigate to MealDetailsScreen we can use onPress(see more goind to MealItem parent component) props or method below using useNavigation

const navigation = useNavigation();

const pressHandler = () => {
    navigation.navigate('MealDetail',{
        mealId: id
    })
}


    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> pressed && styles.buttonPressed} onPress={pressHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black", //iOS from here
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: Platform.OS === 'android' ? 1 : .5,
    }
})

export default MealItem;
