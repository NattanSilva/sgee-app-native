import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  formLabel: {
    width: '100%',
    color: 'white',
    marginTop: 24,
    fontWeight: 'bold',
  },
  formInput: {
    marginTop: 12,
    width: '100%',
    backgroundColor: '#18181b',
    color: '#fff',
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  formInputErrorMessage: {
    width: '100%',
    color: 'red',
    marginTop: 8,
  },
  formButtonContainer: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c951',
    borderRadius: 16,
    marginTop: 32,
  },
  formButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formLinkContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  formLink: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default styles