import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Estilos from '../styles/Estilos';

export default function Sobre() {
  return (
    <ScrollView style={Estilos.scrollViewContainer}>
      <View>
        <Text style={Estilos.sobreTitulo}>Patinhas Felizes</Text>
        <Text style={Estilos.sobreSubtitulo}>Bem-vindo(a) à central de cuidado do seu melhor amigo!</Text>
      </View>

      <View>
        <Text style={Estilos.sobreTexto}>
          Com nosso aplicativo, você nunca mais vai esquecer de dar aquele remédio importante ou perder o dia da vacina. Crie o perfil do seu pet agora e tenha total controle de horários, datas, consultas e todas as tarefas diárias em um só lugar.
        </Text>
      </View>

      <View>
        <Text style={Estilos.sobreRodape}>Acesse a galeria de imagens aqui!</Text>
      </View>
    </ScrollView>
  );
}
