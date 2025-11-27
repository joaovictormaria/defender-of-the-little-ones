import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

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
            mediaTypes: ImagePicker.MediaTypeOptions.All,
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
                            style={{ width: 100, height: 100, borderRadius: 10, marginTop: 10 }}
                        />
                    )}
                </>
            )}
        </View>
    );
}
