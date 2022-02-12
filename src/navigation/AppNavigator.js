import React from 'react';
import { ProfileScreen, HomeScreen, AddressBook, TripHistory } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';


const Drawer = createDrawerNavigator();


const AppNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="AddressBook" component={AddressBook} />
            <Drawer.Screen name="TripHistory" component={TripHistory} />
        </Drawer.Navigator>

    )
}

export default AppNavigator;