import { useSession } from '@/contexts/SessionProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { signInSchema, type SignInData } from './schemas'

export function SignInForm() {
  const { control, handleSubmit } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const router = useRouter()
  const { setIsLogged } = useSession()

  function handleSignIn(data: SignInData) {
    if (data.email === 'natan@mail.com' && data.password === '12345678') {
      setIsLogged(true)
      router.replace('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>E-mail</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={field.onChange}
              autoCapitalize='none'
              keyboardType='email-address'
              style={styles.formInput}
              placeholder='example@mail.com'
            />
            {fieldState.error?.message && (
              <Text style={styles.formInputErrorMessage}>
                {fieldState.error.message}
              </Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Password</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={field.onChange}
              style={styles.formInput}
              placeholder='example!1@S'
              secureTextEntry={true}
            />
            {fieldState.error?.message && (
              <Text style={styles.formInputErrorMessage}>
                {fieldState.error.message}
              </Text>
            )}
          </View>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.formButtonContainer}
        onPress={handleSubmit(handleSignIn)}
      >
        <Text style={styles.formButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.formLinkContainer}>
        <Text style={styles.formLink}>
          Don't have an account?{' '}
          <Link style={{ color: 'yellow' }} href={'/sign-up'}>
            Create Account!
          </Link>
        </Text>
      </View>
    </View>
  )
}
