import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
  },
  headText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 10,
  },
  textN: {
    color: 'white',
    width: '80%',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    marginTop: 5,
    alignSelf: 'center',
  },
})

