import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Alert, 
  ScrollView 
} from 'react-native';

const PRIMARY_RED = '#DC3545';
const PRIMARY_BLUE = '#ff1e00ff';

const Feedback = ({ navigation }) => {
  const [formData, setFormData] = useState({
    tipo: 'sugestao', 
    texto: '',
    contato: ''
  });

  const emailRegex = /\S+@\S+\.\S+/;
  const feedbackTypes = ['Sugestão', 'Elogio', 'Bug'];

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.texto.trim()) {
      Alert.alert("Erro", "Por favor, preencha sua mensagem detalhada.");
      return;
    }

    if (formData.contato.trim() && !emailRegex.test(formData.contato)) {
        Alert.alert("Erro", "Por favor, insira um endereço de e-mail ou telefone válido, ou deixe o campo de contato vazio.");
        return;
    }

    console.log('Dados prontos para envio:', formData);

    Alert.alert(
      "Obrigado!",
      "Seu feedback foi registrado com sucesso.",
      [
        { 
          text: "OK", 
          onPress: () => {
            setFormData({ tipo: 'sugestao', texto: '', contato: '' });
          }
        }
      ]
    );
  };

  return (
    <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Envie-nos seu Feedback</Text>
        <Text style={styles.subtitle}>Sua opinião nos ajuda a defender os pequenos!</Text>

        <Text style={styles.label}>Tipo de Feedback:</Text>
        <View style={styles.typeContainer}>
            {feedbackTypes.map(type => (
                <TouchableOpacity
                    key={type}
                    style={[
                        styles.typeButton,
                        formData.tipo.toLowerCase() === type.toLowerCase() && styles.typeButtonSelected
                    ]}
                    onPress={() => handleChange('tipo', type.toLowerCase())}
                >
                    <Text style={[
                        styles.typeButtonText,
                        formData.tipo.toLowerCase() === type.toLowerCase() && styles.typeButtonTextSelected
                    ]}>
                        {type}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>


        <Text style={styles.label}>Sua Mensagem Detalhada:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={4}
          placeholder="Descreva aqui sua sugestão, elogio ou bug..."
          value={formData.texto}
          onChangeText={(text) => handleChange('texto', text)}
          autoFocus={true}
        />

        <Text style={styles.label}>Seu Contato (Opcional):</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com ou telefone"
          value={formData.contato}
          onChangeText={(text) => handleChange('contato', text)}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>ENVIAR FEEDBACK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  contentContainer: {
    paddingBottom: 40,
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  
  typeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
  },
  typeButton: {
      flex: 1,
      padding: 10,
      marginHorizontal: 4,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      alignItems: 'center',
  },
  typeButtonSelected: {
      backgroundColor: PRIMARY_RED, 
      borderColor: PRIMARY_RED,
  },
  typeButtonText: {
      fontSize: 14,
      color: '#333',
  },
  typeButtonTextSelected: {
      color: '#fff',
      fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', 
  },
  button: {
    backgroundColor: PRIMARY_RED,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: PRIMARY_BLUE,
    fontSize: 16,
  }
});

export default Feedback;
