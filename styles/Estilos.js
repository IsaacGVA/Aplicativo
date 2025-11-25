import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pessoaItemContainer: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pessoaItemNome: { fontSize: 16, fontWeight: 'bold' },
  pessoaItemEmail: { color: '#555' },
  pessoaItemBtnExcluirText: { color: 'red', fontWeight: 'bold' },
  safeAreaViewContainer: { flex: 1, backgroundColor: '#fff', padding: 20 },
  textoTitulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  camposCadastroContainer: { marginBottom: 20 },
  campoTexto: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#FFF8F0',  // Fundo claro creme, acolhedor
    padding: 20,
  },

  // NOVOS ESTILOS para Sobre
  sobreTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F61',  // cor quente, amigável (um laranja suave)
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
  },
  sobreSubtitulo: {
    fontSize: 18,
    color: '#4B4B4B',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: 'sans-serif',
  },
  sobreTexto: {
    fontSize: 16,
    color: '#6A6A6A',
    lineHeight: 24,
    marginBottom: 25,
    textAlign: 'justify',
    fontFamily: 'sans-serif',
  },
  sobreRodape: {
    fontSize: 16,
    color: '#FF6F61',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
