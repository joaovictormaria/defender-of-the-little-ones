import React, { useState } from 'react';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadMidia() {
    const [media, setMedia] = useState(null);

    const pickMedia = async () => {
        // Pedir permissão
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert('Permissão para acessar a galeria é necessária.');
            return;
        }

        // Abrir seletor de mídia (foto ou vídeo)
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, // fotos e vídeos
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setMedia(result.assets[0]);
        }
    };

    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
                style={{
                    backgroundColor: '#fff',
                    paddingVertical: 12,
                    paddingHorizontal: "42%",
                    borderRadius: 8,
                }}
                onPress={pickMedia}
            >
                <Text style={{ color: '#C00000', fontWeight: 'bold' }}>Upload</Text>
            </TouchableOpacity>

            {media && (
                <>
                    {media.type === 'video' ? (
                        <Text style={{ marginTop: 10 }}>🎥 Vídeo selecionado: {media.fileName || 'vídeo.mp4'}</Text>
                    ) : (
                        <Image
                            source={{ uri: media.uri }}
                            style={{ width: 200, height: 200, borderRadius: 10, marginTop: 10 }}
                        />
                    )}
                </>
            )}
        </View>
    );
}
