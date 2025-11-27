import React, { useState } from 'react';
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../components/BackButton';


const CONTACTS = [
  {
    id: 'ibama',
    title: 'IBAMA — Linha Verde (denúncias de fauna silvestre)',
    phone: '08000618080',
    url: 'https://www.gov.br/ibama/pt-br/assuntos/fiscalizacao-e-protecao-ambiental/fiscalizacao-ambiental/denuncias',
    note: 'Denúncias sobre fauna silvestre e tráfico de animais.',
  },
  {
    id: 'pm',
    title: 'Polícia Militar (ocorrência imediata)',
    phone: '190',
    note: 'Use em risco imediato ou crime em andamento.',
  },
  {
    id: 'disque181',
    title: 'Disque Denúncia / Ouvidoria (181)',
    phone: '181',
    note: 'Canal de denúncia e ouvidoria em alguns estados.',
  },
  {
    id: 'sp156',
    title: 'SP156 / Prefeitura (ex.: avisar sobre animal agressor em via pública)',
    url: 'https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=808',
    note: 'Serviço municipal (exemplo: São Paulo) para recolhimento/aviso em via pública.',
  },
];

const LAWS = [
  {
    id: 'l9605',
    title: 'Lei nº 9.605/1998 (Lei de Crimes Ambientais)',
    summary:
      'Prevê sanções penais e administrativas para crimes ambientais, incluindo maus-tratos a animais (art. 32).',
    reference: 'https://www.planalto.gov.br/ccivil_03/leis/l9605.htm',
  },
  {
    id: 'l14064',
    title: 'Lei nº 14.064/2020 (aumenta pena para maus-tratos a cães e gatos)',
    summary:
      'Altera a Lei nº 9.605/1998 para aumentar as penas quando a vítima for cão ou gato (pena de reclusão de 2 a 5 anos, multa e proibição da guarda).',
    reference: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14064.htm',
  },
];

export default function MaisInformacoesScreen() {
  const [openLaw, setOpenLaw] = useState(null);
  const [openContact, setOpenContact] = useState(null);

  async function handleCall(phone) {
    try {
      const url = `tel:${phone}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) return Linking.openURL(url);
      Alert.alert('Erro', `Não foi possível iniciar a chamada para ${phone}`);
    } catch (err) {
      Alert.alert('Erro', 'Operação falhou.');
    }
  }

  async function handleOpenUrl(url) {
    if (!url) return;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) return Linking.openURL(url);
      Alert.alert('Erro', 'Não foi possível abrir o link');
    } catch (err) {
      Alert.alert('Erro', 'Operação falhou.');
    }
    
  }

  function renderLawItem(item) {
    const opened = openLaw === item.id;
    return (

      <View key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => setOpenLaw(opened ? null : item.id)}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardToggle}>{opened ? '−' : '+'}</Text>
          </View>
        </TouchableOpacity>
        {opened && (
          <View style={styles.cardBody}>
            <Text style={styles.paragraph}>{item.summary}</Text>
            <TouchableOpacity onPress={() => handleOpenUrl(item.reference)}>
              <Text style={styles.link}>Abrir texto da lei</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  function renderContactItem(item) {
    const opened = openContact === item.id;
    return (
      <View key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => setOpenContact(opened ? null : item.id)}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardToggle}>{opened ? '−' : '+'}</Text>
          </View>
        </TouchableOpacity>
        {opened && (
          <View style={styles.cardBody}>
            {item.note ? <Text style={styles.paragraph}>{item.note}</Text> : null}
            {item.phone ? (
              <TouchableOpacity style={styles.actionButton} onPress={() => handleCall(item.phone)}>
                <Text style={styles.actionText}>Ligar: {formatPhone(item.phone)}</Text>
              </TouchableOpacity>
            ) : null}
            {item.url ? (
              <TouchableOpacity style={styles.actionButton} onPress={() => handleOpenUrl(item.url)}>
                <Text style={styles.actionText}>Abrir site</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>
    );
  }

  return (
   
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}><BackButton style={styles.backButton} /></View>

        <Text style={styles.sectionTitle}>O que é maus‑tratos?</Text>
        <View style={styles.card}>
          <Text style={styles.paragraph}>
            Maus‑tratos incluem abuso físico, abandono, privação de alimento/água, falta de cuidados veterinários, uso de violência, mutilação, além de situações de negligência grave que causem sofrimento ao animal.
          </Text>
          <Text style={styles.paragraph}>
            Quando presenciar maus‑tratos: priorize sua segurança, registre fotos/vídeos com data/hora (se possível), anote local e testemunhas, e denuncie aos órgãos competentes.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Leis relevantes</Text>
        {LAWS.map(renderLawItem)}

        <Text style={styles.sectionTitle}>Contatos úteis</Text>
        {CONTACTS.map(renderContactItem)}

        <Text style={styles.sectionTitle}>Como denunciar (passo a passo)</Text>
        <View style={styles.card}>
          <Text style={styles.paragraph}>1. Se o crime estiver ocorrendo: ligue para 190 (Polícia Militar).</Text>
          <Text style={styles.paragraph}>2. Reúna evidências: fotos, vídeos, localização precisa, descrição do agressor/veículo.</Text>
          <Text style={styles.paragraph}>3. Registre boletim de ocorrência na delegacia ou via delegacia eletrônica de proteção animal (quando disponível).</Text>
          <Text style={styles.paragraph}>4. Denúncias de fauna silvestre e tráfico: acione a Linha Verde do IBAMA (0800 061 8080) ou o órgão ambiental estadual.</Text>
          <Text style={styles.paragraph}>5. Para recolhimento ou atendimento em via pública, verifique o serviço municipal (ex.: SP156) ou a vigilância em saúde/zoonoses da sua prefeitura.</Text>
        </View>

        <Text style={styles.sectionTitle}>Observações importantes</Text>
        <View style={styles.card}>
          <Text style={styles.paragraph}>• A denúncia pode ser anônima em muitos casos, mas informar seus dados permite acompanhamento do caso.</Text>
          <Text style={styles.paragraph}>• Em resgates de animais silvestres, não manipule o animal sem orientação especializada — acione IBAMA ou equipe municipal.</Text>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
  );
}

function formatPhone(p) {
  if (!p) return '';
  if (p.length <= 3) return p;
  if (p.startsWith('0800')) return p.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
  return p;
}

const styles = StyleSheet.create({
  container: {
    top: Platform.OS === 'android' ? 40 : 0,
    padding: 16,
    backgroundColor: '#ffffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 100,
    color: '#b00000',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
    color: '#d40000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    flex: 1,
  },
  cardToggle: {
    fontSize: 20,
    width: 28,
    textAlign: 'center',
  },
  cardBody: {
    marginTop: 8,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  link: {
    fontSize: 13,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  actionButton: {
    marginTop: 6,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ffdddd',
    alignItems: 'center',
  },
  actionText: {
    fontWeight: '700',
  },
});