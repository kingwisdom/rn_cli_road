import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert, Modal, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { green500 } from 'react-native-paper/lib/typescript/styles/colors';
import WalletModal from './WalletModal';
import WalletOutstandingModal from './WalletOutstandingModal';

const Header = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOutstandingVisible, setModalOutstandingVisible] = useState(false);
    const closeModal = () => {
        setModalVisible(!modalVisible);
    }
    const closeOutstandingModal = () => {
        setModalOutstandingVisible(!modalOutstandingVisible);
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <WalletModal closeModal={closeModal} />
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOutstandingVisible}

                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalOutstandingVisible);
                }}
            >
                <WalletOutstandingModal closeOutstandingModal={closeOutstandingModal} />
            </Modal>
            <SafeAreaView>

                <View style={{ backgroundColor: Colors.dark, paddingVertical: 15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={{ flexDirection: 'row', marginRight: 10, marginHorizontal: 20, marginRight: 20, alignItems: 'center' }}>
                            <Icon name="briefcase" type="font-awesome" color={Colors.white} size={20} style={{ marginRight: 10 }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ color: Colors.green400 }}>WALLET</Text>
                                <Text style={{ color: Colors.white, fontWeight: '800', fontSize: 18 }}>201,200</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalOutstandingVisible(true)}>
                        <View>
                            <Text style={{ color: Colors.red300, fontWeight: '500', fontSize: 11 }}>OUTSTANDING</Text>
                            <Text style={{ color: Colors.white, fontWeight: '800', fontSize: 18 }}>16,900</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Icon name="bars" type="font-awesome" color={Colors.white} size={20} style={{ marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Header;

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
