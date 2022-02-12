
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const WalletOutstandingModal = ({ closeOutstandingModal }) => {
    const navigation = useNavigation();
    const getOutstandingScreen = () => {
        closeOutstandingModal()
        navigation.navigate("OutstandingTrip");

    }
    return (

        <View style={styles.modalView}>
            <Pressable onPress={closeOutstandingModal}>
                <Icon name="times" type="font-awesome" color={Colors.primary} size={20} style={{ marginRight: 10, alignSelf: 'flex-end', padding: 15 }} />
            </Pressable>
            {/* modal body */}

            <View style={styles.card}>
                <View>
                    <Text style={{ color: Colors.green500 }}>WALLET</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.black }}>NGN 201,788</Text>
                </View>
                <Icon name="briefcase" type="font-awesome" color={Colors.primary} size={20} style={{}} />
                <View>
                    <Text style={{ color: Colors.red500 }}>OUTSTANDING</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.black }}>NGN 22,788</Text>
                </View>
            </View>
            <Text style={{
                fontSize: 16, margin: 15
            }}>CLEAR OUTSTANDING</Text>

            <View style={{ backgroundColor: Colors.grey200, borderWidth: 1, borderColor: Colors.grey100, padding: 15 }}>
                <TouchableOpacity style={{ padding: 15, borderBottomColor: Colors.grey300, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="bank" type="font-awesome" color={Colors.grey600} size={16} style={{}} />
                        <Text style={{ color: Colors.black, fontWeight: '600' }}>Clear with Bank Transfer</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    padding: 15, borderBottomColor: Colors.grey300, borderBottomWidth: 1
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="briefcase" type="font-awesome" color={Colors.grey600} size={16} style={{ marginRight: 10 }} />
                        <Text style={{ color: Colors.black, fontWeight: '600' }}>Clear with your Roaddo Wallet</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 15, borderBottomColor: Colors.grey300, borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="bank" type="font-awesome" color={Colors.grey600} size={16} style={{}} />
                        <Text style={{ color: Colors.black, fontWeight: '600' }}>Clear with Bank Card</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={getOutstandingScreen}>
                <Text style={{
                    textAlign: 'center',
                    margin: 15,
                    fontWeight: '700',
                    color: Colors.primary
                }}>View trips with outstandings payments</Text>
            </TouchableOpacity>
        </View>

    );
};

export default WalletOutstandingModal;

const styles = StyleSheet.create({
    modalView: {
        marginTop: 60,
        marginHorizontal: 0,
        backgroundColor: Colors.lightBg,
        borderRadius: 10,
        height: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    card: {
        padding: 20,
        marginHorizontal: 15,
        marginVertical: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

});
