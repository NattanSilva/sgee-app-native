import { SignUpForm } from '@/components/forms/SignUp'
import { Text, View } from 'react-native'
import styles from '../sign-in/styles'

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.saudationContainer}>
        <Text style={styles.saudationTitle}>Create Account Now</Text>
        <Text style={styles.saudationText}>
          Create account and start use our app!
        </Text>
      </View>
      <SignUpForm />
    </View>
  )
}
