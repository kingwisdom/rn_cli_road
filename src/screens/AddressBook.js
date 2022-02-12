import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import Colors from '../constants/Colors';
import tw from 'twrnc'
import Header from '../components/Header';
import { Icon } from 'react-native-elements';

const AddressBook = () => {
    return (
        <>
            <Header />
            <View style={{ flex: 1, backgroundColor: Colors.lightbg, marginTop: 20 }}>
                <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Avatar.Text size={50} backgroundColor={Colors.grey800} label="A" />
                    <View style={tw`ml-3`}>
                        <Text style={tw`font-bold text-black`}>Micheal Lee</Text>
                        <Text style={{ color: Colors.grey600 }}>19 Oremeji Street, Lagos...</Text>
                        <Text style={{ color: Colors.grey600 }}>21-11-29 - Monday - 04:09 pm</Text>
                    </View>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="chevron-right" type="font-awesome" color={Colors.green400} size={20} />
                    </View>
                </View>
                <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Avatar.Text size={50} backgroundColor={Colors.grey800} label="A" />
                    <View style={tw`ml-3`}>
                        <Text style={tw`font-bold text-black`}>Micheal Lee</Text>
                        <Text style={{ color: Colors.grey600 }}>19 Oremeji Street, Lagos...</Text>
                        <Text style={{ color: Colors.grey600 }}>21-11-29 - Monday - 04:09 pm</Text>
                    </View>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="chevron-right" type="font-awesome" color={Colors.green400} size={20} />
                    </View>
                </View>
                <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Avatar.Text size={50} backgroundColor={Colors.grey800} label="M" />

                    <View style={tw`ml-3`}>
                        <Text style={tw`font-bold text-black`}>Micheal Lee</Text>
                        <Text style={{ color: Colors.grey600 }}>19 Oremeji Street, Lagos...</Text>
                        <Text style={{ color: Colors.grey600 }}>21-11-29 - Monday - 04:09 pm</Text>
                    </View>

                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="chevron-right" type="font-awesome" color={Colors.green400} size={20} />
                    </View>
                </View>
            </View>
        </>
    );
};

export default AddressBook;

const styles = StyleSheet.create({});
