import { SignInForm } from '@/components/forms/SignIn'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.saudationContainer}>
        <Text style={styles.saudationTitle}>Wellcome Back</Text>
        <Text style={styles.saudationText}>Sign in and start use our app!</Text>
      </View>
      <SignInForm />
    </View>
  )
}
