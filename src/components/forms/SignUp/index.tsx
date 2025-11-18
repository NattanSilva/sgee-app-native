import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles'
import { signUpSchema, type SignUpData } from './schemas'

export function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      contact: '',
      email: '',
      password: '',
    },
  })
  const router = useRouter()

  function handleSignUp(data: SignUpData) {
    console.log(data)
    router.push('/sign-in')
  }

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        name='name'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Name</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={field.onChange}
              style={styles.formInput}
              placeholder='John Doe'
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
        name='contact'
        render={({ field, fieldState }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.formLabel}>Contact</Text>
            <TextInput
              placeholderTextColor='#52525c'
              value={field.value}
              onChangeText={field.onChange}
              keyboardType='numeric'
              style={styles.formInput}
              placeholder='00000000000'
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
        onPress={handleSubmit(handleSignUp)}
      >
        <Text style={styles.formButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.formLinkContainer}>
        <Text style={styles.formLink}>
          Already have an account?{' '}
          <Link style={{ color: 'yellow' }} href={'/sign-in'}>
            Sign In!
          </Link>
        </Text>
      </View>
    </View>
  )
}
