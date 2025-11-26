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
      <StatusBar style='auto' hidden={true} />
      <UserTab />
      <LoansList />
      <Menu />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingHorizontal: '5%',
    paddingVertical: 52,
  },
  contentContainer: {
    alignItems: 'center',
    gap: 24,
  },
})
