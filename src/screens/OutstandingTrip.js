import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import Colors from '../constants/Colors';
import { Divider } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const OutstandingTrip = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name="times" type="font-awesome" color={Colors.primary} size={24} style={{ marginRight: 20, marginTop: 20, alignSelf: 'flex-end' }} />
            </Pressable>
            <Text style={{ fontWeight: '500', textAlign: 'center', fontSize: 18, color: Colors.black, marginVertical: 20 }}>TRIP WITH OUTSTANDING</Text>
            <Text style={{ fontWeight: 'bold', color: Colors.black, textAlign: 'center', fontSize: 24 }}>NGN 22,100</Text>
            <View style={{ backgroundColor: Colors.grey200, borderRadius: 10, borderWidth: 1, borderColor: Colors.grey100, marginHorizontal: 10, padding: 15 }}>
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={tw`font-bold`}>#30239944</Text>
                        <Text style={tw`text-sm text-green-500 mb-1`}>SINGLE DELIVERY</Text>
                    </View>
                    <View style={tw`font-bold text-black-900 mb-3`}>
                        <Text>8 Sanusi Fafunwa st, Egbe 102213, Lagos...</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text>2022-01-31 12:33:33</Text>
                        <Text style={{ fontWeight: 'bold' }}>NGN 2,189</Text>
                    </View>
                    <Divider />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={tw`font-bold`}>#30239944</Text>
                        <Text style={tw`font-bold text-green-500 mb-1`}>SINGLE DELIVERY</Text>
                    </View>
                    <View style={tw`font-bold text-black-900 mb-3`}>
                        <Text>8 Sanusi Fafunwa st, Egbe 102213, Lagos...</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text>2022-01-31 12:33:33</Text>
                        <Text style={{ fontWeight: 'bold' }}>NGN 2,189</Text>
                    </View>
                    <Divider />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={tw`font-bold`}>#30239944</Text>
                        <Text style={tw`font-bold text-green-500 mb-1`}>SINGLE DELIVERY</Text>
                    </View>
                    <View style={tw`font-bold text-black-900 mb-3`}>
                        <Text>8 Sanusi Fafunwa st, Egbe 102213, Lagos...</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text>2022-01-31 12:33:33</Text>
                        <Text style={{ fontWeight: 'bold' }}>NGN 2,189</Text>
                    </View>
                    <Divider />

                </>
            </View>
        </View>
    );
};

export default OutstandingTrip;

const styles = StyleSheet.create({});
