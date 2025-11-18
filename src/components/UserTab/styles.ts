import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#18181b',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFF',
  },
  infoMessage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  bellContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {},
})
