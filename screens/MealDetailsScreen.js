import React, { useContext, useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails';
import List from '../components/MealsDetail/List';
import Subtitle from '../components/MealsDetail/Subtitle';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { FavoritesContext } from './../store/context/favorites-context';

const MealDetailsScreen = ({ route, navigation }) => {


    // Context 
    // const favoriteMealsCtx = useContext(FavoritesContext);
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    // const changeFavoriteStatusHandler = () => {
    //     if (mealIsFavorite){
    //         favoriteMealsCtx.removeFavorite(mealId)
    //     } else {
    //         favoriteMealsCtx.addFavorite(mealId)
    //     }
    // }


    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((item) => item.id === mealId);

    //Redux
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();


    const mealIsFavorite = favoriteMealIds.includes(mealId);




    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite){
            dispatch(removeFavorite({id: mealId}))
        } else {
            dispatch(addFavorite({id: mealId}))
        }
    }

    

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => { return <IconButton onTap={changeFavoriteStatusHandler} icon={mealIsFavorite ? 'star' : 'star-outline'} color='white'/> } })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle text='Ingredients' />
                    <List list={selectedMeal.ingredients} />
                    <Subtitle text='Steps' />
                    <List list={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 24
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff',
    },
    detailText: {
        color: '#fff'
    },
    image: {
        width: '100%',
        height: 350,
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})

export default MealDetailsScreen;
