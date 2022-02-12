import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions, Image, Modal, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const [tabSelected, setTabSelected] = useState("s");
    return (
        <>

            <Header />
            <ScrollView>
                <View style={{ backgroundColor: Colors.grey200, flex: 1, paddingHorizontal: 10 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.tabbed, {
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            backgroundColor: `${tabSelected === 's' ? '#FFF0E8' : Colors.white}`,
                            borderColor: `${tabSelected === 's' ? Colors.primary : Colors.grey400}`

                        }]} onPress={() => setTabSelected("s")}>
                            <Text style={{
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: `${tabSelected === 's' ? Colors.primary : Colors.grey400}`
                            }}>
                                Single Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tabbed, {
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            backgroundColor: `${tabSelected === 'm' ? '#FFF0E8' : Colors.white}`,
                            borderColor: `${tabSelected === 'm' ? Colors.primary : Colors.grey400}`
                        }]}
                            onPress={() => setTabSelected('m')}>
                            <Text style={{
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                color: `${tabSelected === 'm' ? Colors.primary : Colors.grey400}`
                            }}>
                                Multiple Delivery</Text>
                        </TouchableOpacity>
                    </View>

                    {/* pickup address */}
                    <View style={{ backgroundColor: '#b4e8ed', marginTop: 20, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>
                        <Image source={{ uri: 'https://thumbs.dreamstime.com/b/delivery-rider-10309392.jpg' }} style={{ height: 30, width: 30, }} />
                        <Text style={{ fontSize: 12, marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>Pick-up at</Text>
                            <Text> 19 Oremeji Street, Egbe, Lagos, Nigeria</Text>
                        </Text>
                    </View>

                    {/* change address */}
                    <Text style={{ alignSelf: 'flex-end', marginTop: 10, fontSize: 12, color: Colors.primary }}>Change Pickup Address</Text>
                    {/* address drop */}
                    <View style={{
                        backgroundColor: Colors.white,
                        borderColor: Colors.grey700,
                        borderRadius: 10,
                        paddingVertical: 10,
                        marginTop: 15,
                        paddingHorizontal: 20
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="map-marker" type="font-awesome" color={Colors.primary} size={24} style={{ marginRight: 15 }} />
                            <TextInput placeholder='Drop off Address' />
                        </View>

                    </View>

                    <View style={{
                        backgroundColor: '#F7EFED',
                        borderRadius: 15,
                        padding: 15,
                        marginTop: 20
                    }}>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, paddingHorizontal: 10, borderRadius: 10 }}>
                                <Icon name="user" type="font-awesome" color={Colors.primary} size={24} style={{ marginRight: 15 }} />
                                <TextInput placeholder="Reciever's Name" />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, paddingHorizontal: 10, borderRadius: 10, marginTop: 15 }}>
                                <Icon name="phone" type="font-awesome" color={Colors.primary} size={24} style={{ marginRight: 15 }} />
                                <View style={{ height: 20, width: 1, backgroundColor: Colors.grey400, marginLeft: 5, marginRight: 5 }}></View>
                                <Text>
                                    +234
                                </Text>
                                <View style={{ height: 20, width: 1, backgroundColor: Colors.grey400, marginLeft: 5, marginRight: 5 }}></View>
                                <TextInput placeholder="Reciever's Mobile Number" />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 10,
                        backgroundColor: Colors.white,
                        width: width / 4,
                        borderColor: Colors.green500,
                        borderWidth: 1,
                        alignSelf: 'flex-end'
                    }}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', color: Colors.green500 }}>Save Address</Text>
                    </TouchableOpacity>


                </View >
            </ScrollView>
            <View style={{
                position: 'absolute', bottom: 0, width: width, backgroundColor: Colors.white, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <View style={{ borderRadius: 10, width: 40, height: 40, borderColor: Colors.primary, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="refresh" type="font-awesome" color={Colors.primary} size={24} />
                </View>
                <TouchableOpacity style={{
                    backgroundColor: Colors.primary,
                    width: '80%',
                    marginHorizontal: 20,
                    marginRight: 20,
                    padding: 10,
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: Colors.white
                        }}>Send Request</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tabbed: {
        width: width / 2 - 10,
        borderWidth: 1,
        padding: 15,
        justifyContent: 'center',
        // backgroundColor: Colors.white
    },
    selectedTab: {
        backgroundColor: '',
        borderColor: ''
    }
});
export default HomeScreen;