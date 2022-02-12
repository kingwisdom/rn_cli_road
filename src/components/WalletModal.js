
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';

const WalletModal = ({ closeModal }) => {

    return (

        <View style={styles.modalView}>
            <Pressable onPress={closeModal}>
                <Icon name="times" type="font-awesome" color={Colors.primary} size={20} style={{ marginRight: 10, alignSelf: 'flex-end' }} />
            </Pressable>
            {/* modal body */}

            <View style={styles.card}>
                <View>
                    <Text style={{ color: Colors.green500 }}>WALLET</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.black }}>NGN 201,788.00</Text>
                </View>
                <Icon name="briefcase" type="font-awesome" color={Colors.primary} size={20} style={{}} />
            </View>
            <Text style={{
                fontWeight: 'bold', fontSize: 16
            }}>Top up your wallet</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15
            }}>
                <TouchableOpacity style={styles.topUp}>
                    <Text style={{ color: Colors.primary }}>NGN 5,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topUp}>
                    <Text style={{ color: Colors.primary }}>NGN 10,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topUp}>
                    <Text style={{ color: Colors.primary }}>NGN 15,000</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputCard}>
                <TextInput />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <TouchableOpacity style={{
                    borderRightWidth: 2,
                    borderRightColor: Colors.grey5,
                    width: '50%',
                    padding: 20
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="bank" type="font-awesome" color={Colors.grey600} size={16} style={{}} />
                        <Text style={{ color: Colors.black, fontWeight: '600' }}>Bank Transfer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderLeftWidth: 1,
                    borderLeftColor: Colors.grey5,
                    width: '50%',
                    padding: 20
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="briefcase" type="font-awesome" color={Colors.grey600} size={16} style={{ marginRight: 5 }} />
                        <Text style={{ color: Colors.black, fontWeight: '600' }}>Debit Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default WalletModal;

const styles = StyleSheet.create({
    modalView: {
        marginTop: 60,
        marginHorizontal: 0,
        backgroundColor: Colors.lightBg,
        borderRadius: 10,
        padding: 15,
        height: '60%',
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
        marginVertical: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topUp: {
        backgroundColor: Colors.opacityBg,
        padding: 15,
        marginRight: 2
    },
    inputCard: {
        backgroundColor: Colors.white,
        borderRadius: 5
    }
});
