import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: '5%',
    paddingTop: 52,
    paddingBottom: 32,
    gap: 24,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 12,
    color: '#52525c',
    textAlign: 'center',
  },
  contactContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 16,
  },
  contactCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: '#00cc52fd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#666',
    gap: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  contactTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  contactValue: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
    gap: 8,
  },
  infoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  infoText: {
    color: '#52525c',
    fontSize: 14,
    lineHeight: 20,
  },
})

export default styles