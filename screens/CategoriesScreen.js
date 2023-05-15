import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from './../data/dummy-data';



// a component get navigation props because it's in stack.screen component
const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}


const styles = StyleSheet.create({

})
export default CategoriesScreen;
