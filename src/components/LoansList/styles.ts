import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: '300',
    fontSize: 24,
  },
  seeAllBtn: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllButtonText: {
    color: '#666',
  },
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  listContent: {
    gap: 12,
  },
  cardContainer: {
    width: 160,
    justifyContent: 'center',
    gap: 12,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#18181b',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#666',
  },
  cardDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardStatus: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'orange',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00c951',
  },
})
