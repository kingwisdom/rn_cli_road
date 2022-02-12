import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{ flex: 1 }}
        >
            <ImageBackground source={(require('../assets/banner-man.png'))} resizeMode='cover' style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'flex-end' }} >
                <Image source={{ uri: 'https://www.roaddo.com/assets/img/apptype/CubeJekX/logo.png' }} resizeMode='contain' style={{ height: 80, width: 80, position: 'absolute', top: 10, left: 5 }} />
                <View style={{
                    margin: 20,
                }}>
                    <Text style={{
                        color: Colors.white,
                        fontWeight: 'bold',
                        fontSize: 24
                    }}>Multiple On-Demand Services</Text>
                    <Text style={{
                        color: Colors.black,
                        fontSize: 14
                    }}>We Deliver When You Need It, At Your Fingertips</Text>
                </View>

                <TouchableOpacity style={{
                    backgroundColor: Colors.white,
                    marginHorizontal: 20,
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: Colors.black }}>Login</Text>
                </TouchableOpacity>
                <Divider style={{ backgroundColor: Colors.white, marginHorizontal: 20, marginVertical: 20 }} />
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    marginHorizontal: 20,
                    justifyContent: 'space-between'
                }}>
                    <Pressable>
                        <Text style={styles.bottomLink}>Register</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.bottomLink}>Ride with us</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.bottomLink}>Contact us</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View >
    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    bottomLink: { color: Colors.white, fontWeight: '700' }
});
