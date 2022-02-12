import { ImageBackground, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';

import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={{ uri: 'https://www.roaddo.com/assets/img/apptype/CubeJekX/login_20200429120443.jpg' }} resizeMode='cover' style={{
            flex: 1, width: '100%', height: '100%', justifyContent: 'center'
        }}>

            <View style={{
                backgroundColor: Colors.white,
                marginVertical: 30,
                marginHorizontal: 10,
                paddingHorizontal: 15,
                paddingVertical: 20,
                borderRadius: 20
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 24,
                    marginBottom: 20,
                    color: Colors.black
                }}>Login</Text>
                <Divider />
                <Text style={{
                    fontSize: 16,
                    marginVertical: 10, color: Colors.black
                }}>Manage your account, payments and more.</Text>
                <Text style={styles.inputText}>Email Or Mobile No.</Text>
                <View style={styles.inputControl}>
                    <TextInput />
                </View>
                <Text style={{
                    fontSize: 11, marginBottom: 10, textAlign: 'center'
                }}>
                    Enter mobile number without + or 00 or country code
                </Text>
                <Text style={styles.inputText}>Password</Text>
                <View style={styles.inputControl}>
                    <TextInput />
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: 20
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: Colors.black,
                        padding: 15,
                        borderRadius: 10
                    }} onPress={() => navigation.navigate("AppNavigator")}>
                        <Text style={{ color: Colors.white, marginRight: 20 }}>Login</Text>
                        <Icon name="arrow-right" type="font-awesome" color={Colors.white} size={16} />
                    </TouchableOpacity>
                    <Text>Forgot password?</Text>
                </View>

                <Text style={{ textAlign: 'center' }}>
                    <Text>Don't have an account? </Text>
                    <Text style={{ fontWeight: 'bold', color: Colors.black }}>Sign up</Text>
                </Text>
            </View>
        </ImageBackground>

    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    inputText: {
        color: Colors.black
    },
    inputControl: {
        borderWidth: 1,
        borderColor: Colors.grey5,
        borderRadius: 10,
        marginVertical: 15
    }
});
