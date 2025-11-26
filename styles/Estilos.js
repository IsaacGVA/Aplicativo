import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,               // número, não string
    backgroundColor: '#FFF8F0', // combina com sua tela Sobre
  },

  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  centerContent: {
    width: '100%',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginLeft: 12,
    fontFamily: 'Helvetica',
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF6F61',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 7,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
});

export const drawerStyles = {
  headerStyle: {
    backgroundColor: '#495057',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: '#222',
  },
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#aaa',
  drawerLabelStyle: {
    color: '#0f0',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
