import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from 'twrnc'
import Colors from '../constants/Colors';
import { Divider } from 'react-native-paper';

const TripHistory = () => {
    return (
        <>
            <Header />
            <Text style={tw`text-lg font-bold ml-3 mt-5 mb-5`}>Trip History</Text>
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
        </>
    );
};

export default TripHistory;

const styles = StyleSheet.create({});
