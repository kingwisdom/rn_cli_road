import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import { Avatar, Divider, Text } from 'react-native-paper';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
    const [selectedCountry, setSelectedCountry] = useState();
    return (
        <View style={{ backgroundColor: Colors.grey200 }}>

            <Header />
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Stella Mannava</Text>
                        <Text>user@gmail.com</Text>
                    </View>
                </View>
                {/* phone and email */}
                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="phone" type="font-awesome" color='red' size={18} />
                        <Text style={{ color: Colors.grey500, marginLeft: 10 }}>(+234) 8135407590</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="envelope" type="font-awesome" color='red' size={18} />
                        <Text style={{ color: Colors.grey500, marginLeft: 10 }}>user@gmail.com</Text>
                    </View>

                </View>
                <View>

                </View>
            </View>
            {/* <Icon name="bars" type="font-awesome" color={focused ? '#e32f45' : 'black'} size={24} /> */}
            {/* info */}
            <View style={styles.card}>
                <Text style={{ marginBottom: 15, color: Colors.grey1 }}>Profile Details</Text>
                <Divider size={40} style={{ height: 2, }} />
                <View style={{ marginTop: 15 }}>
                    <Text>First Name:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Stella' />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text>Last Name:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Mannava' />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text>Country:</Text>
                    <View style={styles.inputContainer}>
                        <Picker
                            selectedValue={selectedCountry}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedCountry(itemValue)
                            }>
                            <Picker.Item label="Nigeria" value="nigeria" />
                            <Picker.Item label="Ghana" value="ghana" />
                        </Picker>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <TouchableOpacity style={{
                        backgroundColor: Colors.primary,
                        paddingVertical: 10,
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: Colors.white,
                            fontWeight: '700'
                        }}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        margin: 15,
        padding: 20,
        borderRadius: 10
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.grey4,
        paddingHorizontal: 10,
        marginTop: 10
    }
});
