import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealsList/MealItem';
import MealsList from './../components/MealsList/MealsList';


// Component gets props route and navigation because of Stack.Screen
const MealsOverviewScreen = ({ route, navigation }) => {
    // const route = useRoute() alternative way to get route
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });

   
    // Dynamically change page title
    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category)=> category.id === catId).title;
        navigation.setOptions({title: catTitle});
    }, [catId, navigation]);

    

    return (
        <MealsList items={displayedMeals}/>
    );
}


export default MealsOverviewScreen;
