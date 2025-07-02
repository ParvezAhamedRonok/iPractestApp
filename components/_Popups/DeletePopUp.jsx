import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DELETE_USER_ACCOUNT_PARMANENTLY } from '../../assets/URL\'s/AllUrl';
import { useStateContext } from '@/contexts/ContextProvider';

const DeleteAccountPopUp = () => {
    const { ShowDeleteAccountInfo, setShowDeleteAccountInfo } = useStateContext();
    const [getPassword, setGetPassword] = useState('');
    const [userLoginEmail, setUserLoginEmail] = useState('');

    useEffect(() => {
        (async () => {
            const email = await AsyncStorage.getItem('userEmail');
            setUserLoginEmail(email);
        })();
    }, []);

    const handleDeleteFunc = async () => {
        try {
            const response = await fetch(DELETE_USER_ACCOUNT_PARMANENTLY, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userLoginEmail,
                    password: getPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.message === 'Invalid Password!') {
                    Alert.alert('Oops!', 'Password was incorrect.');
                } else {
                    Alert.alert('Error', data.message || 'Something went wrong.');
                }
                return;
            }

            await AsyncStorage.multiRemove([
                'userName',
                'userEmail',
                'loginTOken',
                'setCountry',
                'setCountryFlag',
            ]);

            setShowDeleteAccountInfo(false);
            // Optionally navigate user to login screen or reload
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    if (!ShowDeleteAccountInfo) return null;

    return (
        <Modal transparent animationType="fade" visible>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.iconCircle}>
                        <Text style={styles.iconText}>🗑️</Text>
                    </View>
                    <Text style={styles.title}>Delete Account?</Text>
                    <Text style={styles.subText}>You'll permanently lose your</Text>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>• Profile</Text>
                        <Text style={styles.listItem}>• Photos</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Please enter your password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                        value={getPassword}
                        onChangeText={setGetPassword}
                    />
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => {
                                setShowDeleteAccountInfo(false);
                            }}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={handleDeleteFunc}
                        >
                            <Text style={styles.deleteText}>Delete Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: 320,
        height: 360,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
    },
    iconCircle: {
        backgroundColor: '#DC2626',
        padding: 16,
        borderRadius: 50,
        marginTop: -40,
        marginBottom: 10,
    },
    iconText: {
        fontSize: 24,
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#111827',
        marginBottom: 4,
    },
    subText: {
        fontSize: 14,
        color: '#374151',
    },
    list: {
        alignSelf: 'flex-start',
        marginVertical: 8,
        paddingLeft: 12,
    },
    listItem: {
        fontSize: 14,
        color: '#374151',
    },
    input: {
        width: '100%',
        marginTop: 12,
        backgroundColor: '#F3F4F6',
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 24,
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#F9FAFB',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        alignItems: 'center',
    },
    cancelText: {
        color: '#374151',
        fontWeight: '500',
    },
    deleteButton: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: '#DC2626',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    deleteText: {
        color: 'white',
        fontWeight: '500',
    },
});

export default DeleteAccountPopUp;
