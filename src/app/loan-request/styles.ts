import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingTop: 52,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    top: 52,
    left: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  saudationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 40,
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

export default styles
