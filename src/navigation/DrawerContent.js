import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const paperTheme = useTheme();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Hello, John Doe</Title>
                                {/* <Caption style={styles.caption}>j_doe@gmail.com</Caption> */}
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Request a Dispatch"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="arrow-right"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Address Book"
                            onPress={() => { props.navigation.navigate('AddressBook') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="arrow-decision-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Trip History"
                            onPress={() => { props.navigation.navigate('TripHistory') }}
                        />

                    </Drawer.Section>
                    <Drawer.Section >
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                {/* <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View> */}
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                //onPress={ }
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14, lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderBottomWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})