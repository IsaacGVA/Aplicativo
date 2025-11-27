import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Cadastro from './components/Cadastro';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';

export default function App() {
  const [tela, setTela] = useState('Sobre');

  const abas = [
    { nome: 'Sobre' },
    { nome: 'Cadastro' },
    { nome: 'Galeria' }
  ];

  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#f37266ff' }}>
      
      {/* Abas estilizadas */}
      <View style={styles.tabContainer}>
        {abas.map((aba) => (
          <TouchableOpacity
            key={aba.nome}
            style={[
              styles.tabButton,
              tela === aba.nome && styles.tabButtonAtiva
            ]}
            onPress={() => setTela(aba.nome)}
          >
            <Text
              style={[
                styles.tabText,
                tela === aba.nome && styles.tabTextAtiva
              ]}
            >
              {aba.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flex: 1 }}>
        {tela === 'Sobre' && <Sobre />}
        {tela === 'Cadastro' && <Cadastro />}
        {tela === 'Galeria' && <Galeria />}
      </View>
    </View>
  );
}






const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },

  tabButtonAtiva: {
    backgroundColor: '#FF6F61',
  },

  tabText: {
    fontSize: 16,
    color: '#555',
  },

  tabTextAtiva: {
    color: '#fff',
    fontWeight: 'bold',
  },
});