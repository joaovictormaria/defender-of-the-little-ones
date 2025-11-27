// BackButton.js
import { Ionicons } from '@expo/vector-icons'; // ícones bonitos do Expo
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BackButton({ label = 'Voltar' }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={14} color="#fff" />
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 0,
        bottom: 10,
        alignSelf: 'flex-start',
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 3,
        fontSize: 14,
    },
});
