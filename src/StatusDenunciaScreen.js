import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function StatusDenunciaScreen() {
  const [protocolos, setProtocolos] = useState([]);
  const [protocoloDigitado, setProtocoloDigitado] = useState('');

  // Lista de status em ordem cíclica
  const statusList = [
    { texto: 'Em andamento', cor: '#f7c843', msg: 'O processo segue em investigação' },
    { texto: 'Indeferido', cor: '#ff3b30', msg: 'O processo foi encerrado' },
    { texto: 'Deferido', cor: '#34c759', msg: 'O processo foi aceito' },
    { texto: 'Em segredo de justiça', cor: '#5856d6', msg: 'Informações restritas' },
  ];

  function handlePesquisar() {
    if (!protocoloDigitado.trim()) return;

    const statusIndex = protocolos.length % statusList.length;
    const status = statusList[statusIndex];

    const novoProtocolo = {
      numero: protocoloDigitado,
      status: status.texto,
      cor: status.cor,
      mensagem: status.msg,
    };

    setProtocolos(prev => [...prev, novoProtocolo]);
    setProtocoloDigitado('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>STATUS DE DENÚNCIA</Text>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Número do protocolo..."
          placeholderTextColor="#fff"
          style={styles.input}
          value={protocoloDigitado}
          keyboardType="numeric"
          onChangeText={(text) =>
            setProtocoloDigitado(text.replace(/[^0-9]/g, ''))
          }
        />
        <Icon name="search" size={24} color="#fff" />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePesquisar}>
        <Text style={styles.buttonText}>PESQUISAR</Text>
      </TouchableOpacity>

      <View style={styles.resultList}>
        {protocolos.map((item, index) => (
          <View key={index} style={styles.resultBox}>

            <View style={styles.protocolBox}>
              <Text style={styles.protocolText}>{item.numero}</Text>
            </View>

            <View style={[styles.statusTag, { backgroundColor: item.cor }]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoText}>{item.mensagem}</Text>
            </View>

          </View>
        ))}
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Legenda de Situação</Text>

        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#ff3b30' }]} />
          <Text>Indeferido</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#f7c843' }]} />
          <Text>Em andamento</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#34c759' }]} />
          <Text>Deferido</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: '#5856d6' }]} />
          <Text>Em segredo de justiça</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 30,
    color: '#c50000',
    fontWeight: '900',
    marginTop: 40,
    marginBottom: 25,
    textAlign: 'center',
  },

  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#c50000',
    borderRadius: 30,
    width: '85%',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 55,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#c50000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginVertical: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultList: {
    width: '90%',
    marginTop: 10,
  },

  resultBox: {
    backgroundColor: '#fff',
    marginBottom: 25,
  },

  protocolBox: {
    backgroundColor: '#c50000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  protocolText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  statusTag: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },

  statusText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  infoBox: {
    borderWidth: 2,
    borderColor: '#c50000',
    borderRadius: 12,
    padding: 12,
    width: '95%',
  },

  infoText: {
    color: '#c50000',
    fontSize: 14,
    fontWeight: '500',
  },

  legend: {
    marginTop: 40,
    width: '80%',
  },

  legendTitle: {
    fontWeight: '900',
    marginBottom: 15,
    fontSize: 16,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
});
