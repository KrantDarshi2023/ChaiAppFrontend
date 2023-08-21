import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Front from './Front';
import ChaiAndCoffeeProducts from './ChaiAndCoffeeProducts';
import SnacksProducts from './SnacksProducts';
import ProductsDetails from './ProductsDetails';
import Cart from './Cart';
import OrderPlaced from './OrderPlaced';
import MyOrders from './MyOrders';

// import DrawerNavigation from './Drawer';
// import CreateBlog from './CreateBlog';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Front" component={Front} />
        <Stack.Screen name="SnacksProducts" component={SnacksProducts} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen
          name="ChaiAndCoffeeProducts"
          component={ChaiAndCoffeeProducts}
        />
        {/* <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen name="CreateBlog" component={CreateBlog} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
