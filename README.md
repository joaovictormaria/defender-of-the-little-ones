<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a1b27,100:7aa2f7&height=200&section=header&text=ProtegePet&fontSize=46&fontColor=70a5fd&fontAlignY=36&desc=Defender%20of%20the%20Little%20Ones%20%E2%80%94%20prote%C3%A7%C3%A3o%20animal%20na%20palma%20da%20m%C3%A3o&descSize=16&descAlignY=56" alt="ProtegePet" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-1a1b27?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-1a1b27?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/SQLite-1a1b27?style=for-the-badge&logo=sqlite&logoColor=7aa2f7" alt="SQLite" />
  <img src="https://img.shields.io/badge/JavaScript-1a1b27?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
</p>

## 🐾 Sobre

O **ProtegePet** é um aplicativo mobile para **proteção e defesa dos animais**. Ele permite denunciar casos de agressão, maus-tratos e abandono, acompanhar o andamento das denúncias e encontrar ONGs. Também reúne leis, contatos úteis e um passo a passo de como agir, para levar educação e conscientização a mais gente.

## ✨ Funcionalidades

| | Tela | O que faz |
|---|---|---|
| 🚨 | **Denunciar** | Formulário com nome, telefone, endereço, relato dos fatos e envio de fotos/vídeos |
| 📋 | **Status da denúncia** | Acompanhe o andamento das denúncias feitas |
| 🏠 | **ONGs** | Lista de ONGs de proteção animal |
| 📚 | **Informações para ajuda** | O que é maus-trato, leis (9.605/98 e 14.064/20), contatos úteis (190, IBAMA, 181) e passo a passo para denunciar |
| 💬 | **Feedback** | Envie sugestões e opiniões sobre o app |

## 🛠️ Tecnologias

- **React Native + Expo**: app multiplataforma (Android, iOS e web)
- **React Navigation**: navegação entre telas
- **Formik + Yup**: formulários com validação
- **SQLite (expo-sqlite)**: armazenamento local das denúncias
- **expo-image-picker**: anexar fotos e vídeos

## ▶️ Como rodar

```bash
git clone https://github.com/joaovictormaria/defender-of-the-little-ones.git
cd defender-of-the-little-ones
npm install
npx expo start
```

Depois, escaneie o QR Code com o app **Expo Go** no celular ou pressione `w` para abrir no navegador.

## 📁 Estrutura

```
src/
├── components/   # Header, botões, upload de mídia, toast
├── navigation/   # rotas do app
├── screens/      # Home, Denunciar, Status, ONGs, Informações, Feedback
└── styles/       # paleta de cores
```

<p align="center">Feito com 💙 por <a href="https://github.com/joaovictormaria">João Victor</a></p>

<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7aa2f7,50:1a1b27,100:0d1117&height=100&section=footer" alt="Rodapé" />
</p>
