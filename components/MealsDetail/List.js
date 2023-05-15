import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({ list }) => {
    return list.map((item) =>
        <View style={styles.listItem}>
            <Text style={styles.itemText}  key={item}>{item}</Text>
        </View>)
}


const styles = StyleSheet.create({
    listItem: {
     
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 6,
        backgroundColor: '#c2835c'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})
export default List;
