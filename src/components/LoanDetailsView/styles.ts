import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#18181b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  invoiceContainer: {
    width: '100%',
    backgroundColor: '#18181b',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
  },
  invoiceHeader: {
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  invoiceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  invoiceSubtitle: {
    fontSize: 12,
    color: '#52525c',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
    borderStyle: 'dashed',
  },
  section: {
    width: '100%',
    gap: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00c951',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  infoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#52525c',
    fontWeight: '500',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  fineAmount: {
    color: '#ff4444',
    fontSize: 16,
  },
  footer: {
    marginTop: 8,
    gap: 8,
  },
  footerText: {
    fontSize: 11,
    color: '#52525c',
    textAlign: 'center',
    fontStyle: 'italic',
  },
})
