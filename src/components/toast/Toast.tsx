import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

export default function ToastSucesso({ visible, message }) {
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.spring(scale, {
                    toValue: 1,
                    friction: 5,
                    tension: 40,
                    useNativeDriver: true,
                })
            ]).start();

            // desaparece sozinho
            setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }, 2200);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <Animated.View style={[styles.card, { opacity, transform: [{ scale }] }]}>

                {/* BRASÃO NO TOPO */}
                <Image
                    source={require('../../../assets/escudo.png')}
                    style={styles.brasao}
                />

                {/* ÍCONE DE CHECK ANIMADO */}
                <Text style={styles.check}>✔</Text>

                <Text style={styles.message}>{message}</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    card: {
        width: 260,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        elevation: 10,
    },
    brasao: {
        width: 90,
        height: 90,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    check: {
        fontSize: 55,
        color: 'green',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
    },
});
