import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: '#fff',
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: "#c67542"
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} /> }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{ drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} /> }} />
    </Drawer.Navigator>
  }

  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: "#3f2f25" }
          }}>
            {/* First component in nav list would be as an initial screen */}
            {/* <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={
            {
              title: 'All Categories',
            }
          } /> */}
            <Stack.Screen name='Drawer' component={DrawerNavigator} options={
              {
                headerShown: false
              }
            } />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
            // One of the methods to use change title dynamically (second way see  MealsOverviewScreen component)
            // options={({route, navigation})=>{
            //   const catId = route.params.categoryId;
            //   return {
            //     title: CATEGORIES.find((category) => category.id === catId).title,
            //   }
            // }} 
            />
            <Stack.Screen name='MealDetail' component={MealDetailsScreen} options={{ title: 'About The Meal' }} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({

});
