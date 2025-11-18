import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  saudationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  saudationTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  saudationText: {
    fontSize: 12,
    color: '#52525c',
  },
})
