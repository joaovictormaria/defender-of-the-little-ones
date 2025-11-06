// BackButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // ícones bonitos do Expo

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
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 3,
        fontSize: 14,
    },
});
