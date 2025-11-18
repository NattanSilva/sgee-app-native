import { LoansList } from '@/components/LoansList'
import { Menu } from '@/components/Menu'
import { UserTab } from '@/components/UserTab'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet } from 'react-native'

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <UserTab />
      <LoansList />
      <Menu />
      <StatusBar style='auto' hidden={true} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingHorizontal: '5%',
    paddingTop: 52,
  },
  contentContainer: {
    alignItems: 'center',
    gap: 24,
  },
  logouButton: {
    marginTop: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
  },
})
