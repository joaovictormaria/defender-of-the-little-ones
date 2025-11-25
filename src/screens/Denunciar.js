'use client'
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { ImageBackground } from "react-native";
import UploadMidia from '../components/UploadMidia';
import BackButton from '../components/BackButton';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import ToastSucesso from '../components/toast/Toast';
import { Alert } from 'react-native';





// Validação com Yup
{/*const LoginSchema = Yup.object().shape({
  nome: Yup.string()
    .required('O nome é obrigatório'),
  telefone: Yup.string()
    .required('O telefone é obrigatório'),
  endereco: Yup.string()
    .required('O endereço é obrigatório'),
  comunicacao: Yup.string()
    .required('A comunicação dos fatos é obrigatória'),
  isChecked: Yup.boolean()
    .oneOf([true], 'Você deve aceitar os termos para continuar'),

});*/}


export default function Form() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmitFormik = async (values) => {
    try {
      const formData = new FormData();
      formData.append('entry.1439391084', values.nome);
      formData.append('entry.1686628628', values.telefone);
      formData.append('entry.1631658019', values.endereco);
      formData.append('entry.1497660051', values.comunicacao);
      formData.append('entry.1002926860', isChecked ? 'Sim' : 'Não');

      await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkmD49uOFujY71bPVrcWTaxvRJrlQQR4zdXhEhJptUGxhivQ/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );

      const protocolo = Math.floor(10000000 + Math.random() * 90000000);

      Alert.alert(
        "Protocolo Gerado",
        `Seu número de protocolo é: ${protocolo}`,
        [
          {
            text: "OK",
            onPress: () => {
              setToastMessage(`Denúncia enviada com sucesso!`);
              setToastVisible(true);

              setTimeout(() => {
                setToastVisible(false);
                navigation.navigate("Home");
              }, 1800);
            }
          }
        ]
      );

    } catch (error) {
      setToastMessage('Erro ao enviar o formulário!');
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2500);
    }
  };




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
            initialValues={{ nome: '', telefone: '', endereco: '', comunicacao: '', checkbox: false }}
            /*validationSchema={LoginSchema}*/
            onSubmit={handleSubmitFormik}
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
                  keyboardType="numeric"

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

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#ffc400ff' : undefined}
                    onBlur={handleBlur('checkbox')}
                  />
                  <Text style={{
                    marginLeft: 10, color: 'white', fontSize: 13,
                  }}>Declaro que estou enviando esta denúncia de maus-tratos por livre e espontânea vontade, ciente de que as informações fornecidas serão analisadas conforme as diretrizes e políticas de privacidade da plataforma.
                    Autorizo o uso dos dados informados exclusivamente para fins de apuração e encaminhamento da denúncia, conforme previsto em lei.</Text>

                </View>

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
          <ToastSucesso visible={toastVisible} message={toastMessage} />

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
    width: '70%',
    height: 130,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    left: '2.5%',
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
    elevation: 5,
    shadowColor: '#000',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonText: { color: "#fff", fontSize: 34, fontWeight: "900", textAlign: "center", bottom: 20, fontFamily: 'Anton_400Regular' },

});
