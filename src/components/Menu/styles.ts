import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 16,
  },
  title: {
    width: '100%',
    color: 'white',
    fontWeight: '300',
    fontSize: 24,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 12,
  },
  optionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 12,
    backgroundColor: '#00cc52fd',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#666",
  },
  optionTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
