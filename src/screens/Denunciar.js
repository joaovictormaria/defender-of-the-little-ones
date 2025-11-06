import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ImageBackground } from "react-native";
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import UploadMidia from '../components/UploadMidia';
import BackButton from '../components/BackButton';



// Validação com Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Form() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >

      <View style={styles.container}>
        
        <View style={styles.form}>
          <BackButton />
          <Text style={styles.buttonText}>Denunciar {'\n'} Maus-Tratos</Text>

          
          
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              alert('Login realizado!');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('nome')}
                  onBlur={handleBlur('nome')}
                  value={values.nome}
                />
                {errors.nome && touched.nome && <Text style={styles.error}>{errors.nome}</Text>}
                
                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                  value={values.telefone}
                />
                {errors.telefone && touched.telefone && <Text style={styles.error}>{errors.telefone}</Text>}

                <Text style={styles.label}>Endereço do Ocorrido:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('endereco')}
                  onBlur={handleBlur('endereco')}
                  value={values.endereco}
                />
                {errors.endereco && touched.endereco && <Text style={styles.error}>{errors.endereco}</Text>}
                />
                <Text style={styles.label}>Comunicação dos Fatos:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('comunicacao')}
                  onBlur={handleBlur('comunicacao')}
                  value={values.comunicacao}
                />
                {errors.comunicacao && touched.comunicacao && <Text style={styles.error}>{errors.comunicacao}</Text>}

                <Text style={styles.label}>Fotos/Vídeos do Ocorrido:</Text>
                <UploadMidia
                  style={styles.midia} />
                
                <TouchableOpacity onPress={handleSubmit} style={styles.botaoenviar}>
                  <ImageBackground
                    source={require("../../assets/logo-enviar-denuncia.png")}
                    style={styles.botaoenviar}
                    resizeMode="cover"
                  >
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  botaoenviar: {
    justifyContent: 'center',
    width: '84%',
    height: 240,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    left: '2%',
  },
  form: {
    backgroundColor: 'red',
    justifyContent: 'center',
    width: '110%',
    alignSelf: 'center',
    marginBottom: 5,
    borderRadius: 25,
    padding: 20,
    margin: 0,
    elevation: 5, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  label: {
    color: '#fff',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  midia: {
    color: '#fff',
    padding: 20,
    elevation: 5, // sombra no Android
    shadowColor: '#000', // sombra no iOS
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonText: { color: "#fff", fontSize: 34, fontWeight: "900", textAlign: "center", bottom: 20, fontFamily: 'Anton_400Regular' },

});
